import React from 'react';
import WorkCardList from './WorkCardList.jsx';
import { Row, Col } from 'react-bootstrap';


const WorkList = ({ works }) => {
    return (

        <Row>

            {works.map((elm, index) => (
                <Col sm={12} md={6} lg={4}  >
                    <div key={works._id} className="work-card">

                        <WorkCardList key={index} {...elm} />
                    </div>
                </Col>
            ))}

        </Row>


    );
};

export default WorkList;






