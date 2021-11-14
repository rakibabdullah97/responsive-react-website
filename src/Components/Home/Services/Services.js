import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './services.css'



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('students.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='services-container'>
            {
                services.map(service => <Service
                    key={service.key}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;