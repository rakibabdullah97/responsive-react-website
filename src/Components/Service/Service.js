import React from 'react';
import './Service.css'
const Service = (props) => {
    const {img,name,Location} = props.service
    return (
        <div className='service'>
            <img style={{width:200}} src={img} alt=''/>
            <h3>{name}</h3>
            <h5 >location: {Location}</h5>
        </div>
    );
};

export default Service;