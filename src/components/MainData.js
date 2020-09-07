import React from 'react';
import '../stylesheets/MainData.css'
import axios from 'axios';


class MainData extends React.Component{
  constructor(props){
      super(props);
   
   this.state={
       stockChartXvalues: [],
       stockChartYvalues: [],
       symbol: props.symbol
   }

   console.log(props.symbol)
  }

 


  
   
 
  
  render(){
   return(
     <div className="main-data">
    <div className="main-flex">
     <span className="item"></span>
     <span className="item">shares outstanding</span>
     <span className="item">previos close</span>
     <span className="item">volume</span>
    </div>
   

   </div>
  ) 
  }
  
   



}


export default MainData;