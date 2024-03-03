import WorkCardList from './WorkCardList.jsx';
import { Row, Col } from 'react-bootstrap';

const WorkList = ({ works }) => {




    return (
        <Row className='hoverCursor d-flex align-items-center justify-content-center'>
            {works.map((elm) => (
                <Col className='mt-1' key={elm._id} sm={12} md={6} lg={4}>
                    <div className="work-card ">
                        <WorkCardList {...elm} />
                    </div>
                </Col>
            ))}
        </Row>
    );
};


export default WorkList;






