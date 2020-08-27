import React from 'react';
import courses from '../../course';
import './Courses.css'
import {useState} from 'react';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Courses = (props) => {
    

    const [cart, setcart] = useState([]);

    const addtoCart=(course)=>{
        const newcart=[...cart,course]
        setcart(newcart);
    }

    return (
        <div className="main">
            <div className="container">
                <div className="row">
                <div className="course-area">
                      {
                          courses.map(co=><Course course={co} addtoCart={addtoCart} key={co.title}></Course>)
                      }
                </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>

            </div>
            
              </div>
               </div>
           
            
        </div>
    );
};

export default Courses;