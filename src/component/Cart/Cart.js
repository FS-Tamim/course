import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart=props.cart;

    let total=0
    for(let i=0;i<cart.length;i++){
        let course=cart[i];
        total=total+course.price;
    }

    return (
        <div>
            <h4>order summary</h4>
            <h5>Course ordered: <span>{cart.length}</span></h5>
            <h5>Total Price: <span>${total}</span></h5>
            
        </div>
    );
};

export default Cart;