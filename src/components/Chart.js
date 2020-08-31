import React from 'react';
import '../stylesheets/Chart.css'
import { Bar, Line } from 'react-chartjs-2';



class Chart extends React.Component{
  constructor(props){
      super(props);

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      let currentDay = currentDate.getDate();
      const currentYear = currentDate.getFullYear();
      const currentDayOfWeek = currentDate.getDay();
      const date = `${currentMonth +1}/${currentDay}/${currentYear}`;


      const prevOne = currentDay - 1;
      const prevDateOne = `${currentMonth +1}/${prevOne}/${currentYear}`;
      const prevTwo = currentDay - 2;
      const prevDateTwo = `${currentMonth +1}/${prevTwo}/${currentYear}`;
      const prevThree = currentDay - 3;
      const prevDateThree = `${currentMonth +1}/${prevThree}/${currentYear}`;
      const prevFour = currentDay - 4;
      const prevDateFour = `${currentMonth +1}/${prevFour}/${currentYear}`;
      
     
      if(currentDayOfWeek === 0){
        currentDay -=2;
     }else if(currentDayOfWeek === 6){
        currentDay -=1;
     }
        
     //console.log(`${currentYear}-${checkMonth()}-${currentDay}`);
     const test = currentMonth.toString().split("")
     //console.log(test.length);
     

     function checkMonth(){
        const currentMonth = currentDate.getMonth() +1;
        const test = currentMonth.toString().split("");
        if(test.length === 1){
         return `0${currentMonth}`;
        }else{
            return currentMonth;
        }
     }
     //console.log(checkMonth())
    

 this.state = { data: {
    labels: [date,  prevDateOne , prevDateTwo, prevDateThree, prevDateFour],
    datasets: [
        {
            label: "open",
            backgroundColor: '#333',
            data: [props.test, 85, 38.04, 40.05, 39.80]
        },
        {
          label: "close",
          backgroundColor: '#888',
          data: [ 37.15, 37.01, 39.04, 40.07, 39.75]
      },
     
        
    ]
},


}




  }



 
  
  
  
  
    render(){
    return(
        <div className="main-chart">
          <Bar
          options={{responsive: true}}
          data={this.state.data}
          />
     
        </div>
     
     
       )
     
  }
 
}


export default Chart;