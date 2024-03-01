import WorkCardList from './WorkCardList.jsx';
import { Row, Col } from 'react-bootstrap';

const WorkList = ({ works }) => {




    return (
        <Row>
            {works.map((elm) => (
                <Col key={elm._id} sm={12} md={6} lg={4}>
                    <div className="work-card">
                        <WorkCardList {...elm} />
                    </div>
                </Col>
            ))}
        </Row>
    );
};


export default WorkList;






