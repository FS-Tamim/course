import React from 'react';
import './Showcart.css'

const Showcart = (props) => {
    const {title,image,price}=props.showcart;
    return (
        <div>
            <div className="main">
                <div>
                    <img src={image} alt=""/>
                </div>
                     
                <div>
                   <h4>  {title}</h4>
                 <h6>  ${price}</h6>
                </div>
            </div>
            
        </div>
    );
};

export default Showcart;