import React from 'react';
import '../stylesheets/Header.css';




const Header = (props) =>{

   
    const fiftyTwo = ()=>{
        if(props.fiftyTwoHigh !== undefined){
        return(
            <div className="flex">
                <span className="item">${props.currentPrice}</span>
                <span className="item">52 week high {props.fiftyTwoHigh}</span>
                <span className="item">52 week low {props.fiftyTwoLow}</span>
            </div>
            
        );
        }
    }


    return(
        <div className="header ui container">
            <h5>{props.exchange}</h5>
            <p>{props.symbol} <span id="name">{props.name}</span></p>
    
              {fiftyTwo()}
          
        </div>
    )
}

export default Header;