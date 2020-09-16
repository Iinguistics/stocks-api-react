import React from 'react';
import '../stylesheets/Description.css'


const  Description =  ({ symbol, description, industry, employees, split })=>{
  const show = ()=>{
      if(symbol !== undefined){
        return (
            <div className="description">
              <h5>{symbol} Company Overview</h5>
              <p>{description}</p>
              <p>Industry: {industry}</p>
              <p>Full time employees: {employees}</p>
              <p>Last split date: {split}</p>
            </div>
        )
      }
      
  }


    return (
        <div>
            {show()}
        </div>
    )
}








export default Description;