import React from 'react';
import '../stylesheets/MainData.css'

const MainData = (props)=>{
  return(
   <div className="main-data">
    <div className="main-flex">
     <span className="item">open</span>
     <span className="item">shares outstanding</span>
     <span className="item">previos close</span>
     <span className="item">volume</span>
    </div>
    <div id="graph">
     graph
    </div>

   </div>


  )



}


export default MainData;