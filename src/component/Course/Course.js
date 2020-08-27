import React from 'react';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Course = (props) => {
    const {title,image,price}=props.course
    return (
        <div className="main col-md-6">
            <div>
                 <img src={image} alt=""/>
            </div>
            <div className='info'>
                <h4>{title}</h4><br></br>
                <h6>${price}</h6><br></br>
                <button className="btn btn-primary" onClick={()=>props.addtoCart(props.course)}><FontAwesomeIcon icon={faShoppingCart } />add to cart</button>
            </div>
            <hr/>
        </div>
    );
};
export default Course;