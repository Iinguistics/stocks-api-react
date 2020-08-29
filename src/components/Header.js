import React from 'react';
import '../stylesheets/Header.css';



const Header = (props) =>{
    return(
        <div className="header ui container">
            <h5>exchange</h5>
            <p>symbol <span id="name">tesla inc com</span></p>
            <div className="flex">
              <span className="item">current price</span>
              <span className="item">bidsize: 2,216.687</span>
              <span className="item">ask size: 2217.510</span>
            </div>
        </div>
    )
}

export default Header;