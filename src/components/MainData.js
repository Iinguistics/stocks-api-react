import React from 'react';
import '../stylesheets/MainData.css'
import Chart from './Chart';

const MainData = (props)=>{

  
  return(
   <div className="main-data">
    <div className="main-flex">
     <span className="item">open</span>
     <span className="item">shares outstanding</span>
     <span className="item">previos close</span>
     <span className="item">volume</span>
    </div>
    <Chart test={69.69} />

   </div>


  )



}


export default MainData;