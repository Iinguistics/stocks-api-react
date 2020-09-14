import React, {useState} from 'react';
import '../stylesheets/Header.css';




const Header = ({ symbol, current, open, name }) =>{


   const diff = ()=>{
       if(current > open){
           const difference = current - open;
           const differenceString = difference.toString();
           const differenceSplit = differenceString.split("");
           const differentSlice = differenceSplit.slice(0,4);
           const diffNumber = differentSlice.join("");
           const answer = Number(diffNumber);
           return  `+${answer}`;
       }else if(current < open){
            const difference = current - open;
            const differenceString = difference.toString();
            const differenceSplit = differenceString.split("");
            const differentSlice = differenceSplit.slice(0,5);
            differentSlice.join("");
            const diffNumber = differentSlice.join("");
            const answer = Number(diffNumber);
            return answer;
    } 
   }



   const headData = ()=>{
       if(name !== undefined){
         
           return (
               <div>
                <span>{symbol}</span>
                <span>{name}</span>
                <br />
                <span>${current}</span>
                 <span className={`${current > open ? 'green' : 'red' }`}>{diff()}</span>
               </div>
           )
       }
   }
     
        
      
  
   

    return(
        <div className="header ui container">
             {headData()}
        </div>
    )
}

export default Header;