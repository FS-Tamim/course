import React from 'react';
import courses from '../../course';
import './Courses.css'
import Course from '../Course/Course';

const Courses = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                <div className="course-area">
            {
                courses.map(co=><Course course={co}></Course>)
            }
            </div>
            <div className="cart-area">

            </div>
            
                </div>
            </div>
           
            
        </div>
    );
};

export default Courses;