import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.css';

const Course = (props) => {
    const {title,image,price}=props.course
    return (
        <div className="main col-md-3">
            <div>
                <img src={image} alt=""/>
            </div>
            <div className='info'>
                <h4>{title}</h4>
                <h6>${price}</h6>
                <button className="btn btn-primary">add to cart</button>
            </div>
            <hr/>
        </div>
       
    );
};

export default Course;