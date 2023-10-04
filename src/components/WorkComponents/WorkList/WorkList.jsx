import React from 'react';
import WorkCardList from './WorkCardList.jsx';
import './WorkList.css';
import { Row, Col } from 'react-bootstrap';


const WorkList = ({ works }) => {
    return (


        <div className="work-list-container">

            <div className="work-card-list">
                <Row>

                    {works.map((elm, index) => (
                        <Col sm={12} md={6} lg={4}  >
                            <div key={works._id} className="work-card">

                                <WorkCardList key={index} {...elm} />
                            </div>
                        </Col>
                    ))}

                </Row>

            </div>
        </div>
    );
};

export default WorkList;






