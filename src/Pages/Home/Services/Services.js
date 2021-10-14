import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className="services-container container">
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
                
            }

        </div>
    );
};

export default Services;