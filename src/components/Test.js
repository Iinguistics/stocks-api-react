import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import '../stylesheets/Chart.css';


class Test extends React.Component{
    constructor(props){
      super(props);
     this.state = {
         stockChartXValues: [],
         stockChartYValues: [],
         chartData:{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3]
         }],
         backgroundColor: [
          'rgba(207, 2, 2, 1)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      }
    }
  }

    componentDidMount(){
        this.fetchStock();
    }

    fetchStock = async()=>{
        const key = 'S6JXB9Q8DEA16WF1';
        const dailyRes = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${key}`)
        this.setState({TIME_SERIES_DAILY: dailyRes.data})
       let stockChartXValuesFunction = [];
       let stockChartYValuesFunction = [];
        for(let key in this.state.TIME_SERIES_DAILY["Time Series (Daily)"]){
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(this.state.TIME_SERIES_DAILY["Time Series (Daily)"][key]["1. open"]);
        }
        this.setState({stockChartXValues: stockChartXValuesFunction});
        this.setState({stockChartYValues: stockChartYValuesFunction});
    }






render(){
    return(
   <div className="main-chart">
      <Bar
      options={{responsive: true}}
      data={this.state.chartData} />
   </div>
    );
}

}


    
   

   



export default Test;