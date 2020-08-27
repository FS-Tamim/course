import React from 'react';
import './Head.css';
import 'bootstrap/dist/css/bootstrap.css';

const Head = () => {
    return (
        <div className='head'>
            <h1>Online School</h1>
            <hr></hr> 
            <br/>
           
           <form className="form-inline">
           <input class="form-control" type="search" placeholder="Search" aria-label="Search"/> 
           <button class="btn btn-outline-primary ml-2" type="submit">Search</button>
          </form> 
              
        </div>
    );
};

export default Head;