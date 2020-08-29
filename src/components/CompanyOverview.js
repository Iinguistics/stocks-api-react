import React from 'react';
import '../stylesheets/CompanyOverview.css';

const CompanyOverview = (props)=> {

    const overview = ()=>{
      if(props.fiftyDay !== undefined){
          return( 
            <div className="overview-flex">
                <li className="item">50 Day moving average: {props.fiftyDay}</li>
                <li className="item">52 Week high: {props.fiftyTwoHigh}</li>
                <li className="item">52 Week Low: {props.fiftyTwoLow}</li>
                <li className="item">Analyst target price: {props.analyst}</li>
                <li className="item">Payout ratio: {props.payOutRatio}</li>
                <li className="item">Profit margin: {props.profitMargin}</li>
                <li className="item">Quarterly earning's growth YOY: {props.quarterlyEarningsGrowth}</li>
                <li className="item">Quarterly revenue growth YOY: {props.quarterlyRevenueGrowth}</li>
                <li className="item">Gross profit TTM: {props.grossProfitTTM}</li>
                <li className="item">Last split date: {props.lastSplitDate}</li>
                <li className="item">Full time employees: {props.fullTimeEmployees}</li>
            </div>
            

          );
      }else{
          return <div></div>
      }
     }
     
  
        return (
            <div className="overview-wrap">
              <h3>{props.asset}</h3>
              {overview()}
              
            </div>
            );
      
       
   


  
    
   
}

export default CompanyOverview;