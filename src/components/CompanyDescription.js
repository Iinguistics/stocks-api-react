import React from 'react';
import '../stylesheets/CompanyDescription.css';

const CompanyDescription = (props)=> {

   
      const description = ()=>{
          if(props.description !== undefined){
            return (
                <div className="company-description-wrap">
                   <p>Company overview: {props.description}</p>
                   <p>Company Contact</p>
                   <p>{props.address}</p>
                </div>
                );
          }else{
              return <div></div>
          }
      }
  
        
      return (
        <div>
          {description()}
        </div>
       
      );

   
}

export default CompanyDescription;