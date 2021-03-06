import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Line } from 'react-chartjs-2';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
//import Description from '../components/Description';
import '../stylesheets/App.css'



const App = ()=> {
  const [labelDateData, setlabelDateData] = useState([]);
 // const [globalQuoteData, setglobalQuoteData] = useState({});
 // const [overview, setOverview] = useState({});
  const [chartData, setChartData] = useState({});
  const [chartOpenData, setChartOpenData] = useState([]);
  const [chartCloseData, setChartCloseData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [termData, setTerm] = useState("");
  const [seriesSymbol, setSeriesSymbol] = useState("");
  const [formRan, setFormRan] = useState(false);
  
  
  const onFormSubmit = (term)=>{
     setTerm(term);
        // const KEY = 'S6JXB9Q8DEA16WF1';
         const KEYTWO = '9B6NPR0OKD5LE1WG';
         let stockChartOpenValuesFunction = [];
         let stockChartCloseValuesFunction = [];
         let stockChartLabelDateValuesFunction = [];


         // Time series daily call
         fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${term}&apikey=${KEYTWO}`)
         .then((res)=> res.json())
         .then((data)=>{
           setSeriesSymbol(term)
           for(let key in data["Time Series (Daily)"]){
             stockChartOpenValuesFunction.push(
             data["Time Series (Daily)"][key]["1. open"]
           ); 
           stockChartCloseValuesFunction.push(
             data["Time Series (Daily)"][key]["4. close"]
           );
           stockChartLabelDateValuesFunction.push(key);
         }
         })
         .then((data)=>{
           setChartOpenData(stockChartOpenValuesFunction);
           setChartCloseData(stockChartCloseValuesFunction);
           setlabelDateData(stockChartLabelDateValuesFunction);
         })

         
          // // Global Quote call
          // fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term}&apikey=${KEY}`)
          // .then((res)=> res.json())
          // .then((data)=>{
          //   setglobalQuoteData(data["Global Quote"]);
          //   });
         
          
          

           setFormRan(true);
           setShowChart(true);
           
        
        
           // Company Overview call
          // const KEYTHREE = 'VIC878YP3QLUBAEX';
          // const overviewResponse = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${term}&apikey=${KEYTHREE}`);
          // setOverview(overviewResponse.data);
        
             
  }

   
  useEffect(()=>{
     chart()
     show()
   }, [labelDateData]);

    const chart = ()=>{
     
     setChartData({
          labels: [labelDateData[0], labelDateData[1], labelDateData[2], labelDateData[3], labelDateData[4], labelDateData[5], labelDateData[6], labelDateData[7], labelDateData[8], labelDateData[9]],
          datasets:[
            {
              label: 'open',
              data: [chartOpenData[0], chartOpenData[1], chartOpenData[2],chartOpenData[3],chartOpenData[4],chartOpenData[5],chartOpenData[6],chartOpenData[7],chartOpenData[8],chartOpenData[9]],
              backgroundColor: [
                "#0973A5"
              ],
              boderWidth: 4,
              pointBackgroundColor: "#000"
            },
            {
              label: 'close',
              data: [chartCloseData[0], chartCloseData[1], chartCloseData[2],chartCloseData[3],chartCloseData[4],chartCloseData[5],chartCloseData[6],chartCloseData[7],chartCloseData[8],chartCloseData[9],],
              backgroundColor: [
                '#5C0AF7 '
              ],
              boderWidth: 4,
              pointBackgroundColor:'#A04000'
            },
          ]
        })
    }

    const current = chartCloseData[0];
    const open = chartOpenData[0]
   

     const show = ()=>{
          if(showChart === true){
          return (
             <div className="chart">
             <Line data={chartData} options={{ responsive: true }} />
             </div>
            )   
       }
     } 
     

    
    const invalidTerm = () =>{
      if(formRan === true && current === undefined && termData !== ""){
        return (
          <div className="error">
            <p>Please enter a valid symbol</p>
          </div>
        )
      }
    }


    const empty = ()=>{
      if(formRan === true && termData === ""){
        return (
        <div className="error">
          <p>Please enter a symbol</p>
        </div>
        )
      }
     }
  
 

     return(
      <div>
        <SearchBar onFormSubmit={onFormSubmit} />
        {empty()}
        {invalidTerm()}
        <Header symbol={seriesSymbol} current={current} open={open} />
        {show()}
      </div>
    )     
}



export default App;