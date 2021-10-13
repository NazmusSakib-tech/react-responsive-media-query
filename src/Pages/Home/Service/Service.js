import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, price, img, time,description} = props.service;
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>{time}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;