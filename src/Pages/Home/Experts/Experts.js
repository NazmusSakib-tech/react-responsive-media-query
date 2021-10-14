import React from 'react';
import mechanic1 from '../../../images/experts/e1.jfif'
import mechanic2 from '../../../images/experts/e2.jfif'
import mechanic3 from '../../../images/experts/e3.jfif'
import mechanic4 from '../../../images/experts/e3.jfif'
import Expert from '../Expert/Expert';


const Experts = () => {
    const experts = [
        {
            id: 1,
            name: "Abdul Karim",
            expertize: "Engine Expart",
            img: mechanic1
        },
        {
            id: 2,
            name: "Abdul Baten",
            expertize: "Polish Expart",
            img: mechanic2
        },
        {
            id: 3,
            name: "Ratan Ali",
            expertize: "Wash Expart",
            img: mechanic3
        },
        {
            id: 4,
            name: "Yeasir Hamid",
            expertize: "Socket wearing Expart",
            img: mechanic4
        }
    ]
    return (
        <div id="experts">
            <h2 className="text-primary">Our Experts</h2>
            <div className="container">
                <div className="row">
                    {experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)}
                </div>
            </div>
        </div>
    );
};

export default Experts;