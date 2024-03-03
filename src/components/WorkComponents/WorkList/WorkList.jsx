import WorkCardList from './WorkCardList.jsx';
import { Row, Col } from 'react-bootstrap';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const WorkList = ({ works }) => {
    const { scrollY } = useScroll();
    const [visibleWorks, setVisibleWorks] = useState([]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const visibleWorkIndices = works.reduce((acc, _, index) => {
            const element = document.getElementById(`work-${index}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    acc.push(index);
                }
            }
            return acc;
        }, []);
        setVisibleWorks(visibleWorkIndices);
    });

    useEffect(() => {
        const initialVisibleWorks = works.reduce((acc, _, index) => {
            const element = document.getElementById(`work-${index}`);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    acc.push(index);
                }
            }
            return acc;
        }, []);
        setVisibleWorks(initialVisibleWorks);
    }, [works]);

    return (
        <>
            <Row className='hoverCursor d-flex align-items-center justify-content-center'>
                {works.map((elm, index) => (
                    <Col className='mt-1' key={elm._id} sm={12} md={6} lg={4}>
                        <motion.div
                            id={`work-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: visibleWorks.includes(index) ? 1 : 0,
                                y: visibleWorks.includes(index) ? 0 : 20,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="work-card">
                                <WorkCardList {...elm} />
                            </div>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default WorkList;
