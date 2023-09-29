import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import WorkCardList from './WorkCardList.jsx';
import './WorkList.css'; // Asegúrate de tener tu archivo CSS importado aquí


const WorkList = ({ works }) => {
    return (
        <div className="work-list">

            {works.map((elm, index) => (

                <WorkCardList key={index} {...elm} />

            ))}


        </div>
    );
};

export default WorkList;






