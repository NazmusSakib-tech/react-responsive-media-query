import React from 'react';
import './Expert.css'

const Expert = (props) => {
    console.log(props.expert);
    const {name, expertize, img} = props.expert;
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expert;