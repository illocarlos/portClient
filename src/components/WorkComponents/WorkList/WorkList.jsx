import React from 'react';
import WorkCardList from './WorkCardList.jsx';
import './WorkList.css';


const WorkList = ({ works }) => {
    return (


        <div className="work-list-container">

            <div className="work-card-list">

                {works.map((elm, index) => (

                    <div key={works._id} className="work-card">

                        <WorkCardList key={index} {...elm} />
                    </div>

                ))}


            </div>
        </div>
    );
};

export default WorkList;






