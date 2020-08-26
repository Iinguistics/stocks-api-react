import React from 'react';
import '../stylesheets/CompanyOverview.css';

const CompanyOverview = (props)=> {
 
  



   
    return (
    <div className="overview-wrap">
      <h3>{props.symbol}</h3>
      <h3>{props.name}</h3>
      <h3>{props.exchange}</h3>
      <p>{props.description}</p>
    </div>
    );
   
}

export default CompanyOverview;