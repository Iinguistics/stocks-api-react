import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Description from '../components/Description';
import '../stylesheets/App.css'



const App = ()=> {
  const [labelDateData, setlabelDateData] = useState([]);
  const [globalQuoteData, setglobalQuoteData] = useState({});
  const [overview, setOverview] = useState({});
  const [chartData, setChartData] = useState({});
  const [chartOpenData, setChartOpenData] = useState([]);
  const [chartCloseData, setChartCloseData] = useState([]);
  const [showChart, setShowChart] = useState(false);
  const [formRan, setFormRan] = useState(false);
  const [emptyTerm, setEmptyTerm] = useState("");

   const onFormSubmit = async(term)=>{
     if(term === ""){
      setEmptyTerm("Please enter a symbol");
      return;
     }
         const KEY = 'S6JXB9Q8DEA16WF1';
         const KEYTWO = '9B6NPR0OKD5LE1WG';
         const KEYTHREE = 'VIC878YP3QLUBAEX';
         let stockChartOpenValuesFunction = [];
         let stockChartCloseValuesFunction = [];
         let stockChartLabelDateValuesFunction = [];
         // Global Quote call
         const quoteResponse = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term}&apikey=${KEY}`);
         setglobalQuoteData(quoteResponse.data["Global Quote"]);

        //  // Company Overview call
         const overviewResponse = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${term}&apikey=${KEYTHREE}`);
         setOverview(overviewResponse.data);

         

        // Time series daily call
         const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${term}&apikey=${KEYTWO}`);
         
         for(let key in response.data["Time Series (Daily)"]){
             stockChartOpenValuesFunction.push(
             response.data["Time Series (Daily)"][key]["1. open"]
           );
           stockChartCloseValuesFunction.push(
             response.data["Time Series (Daily)"][key]["4. close"]
           );
           stockChartLabelDateValuesFunction.push(key);
          
         }
          
         setTimeout(()=>{
         setChartOpenData(stockChartOpenValuesFunction);
         setChartCloseData(stockChartCloseValuesFunction);
         setlabelDateData(stockChartLabelDateValuesFunction);
           
          chart();
          setShowChart(true);
          show();
         }, 3000)
         
          
         setFormRan(true);
          
  }

 

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
   
    
     useEffect(()=>{
      if(labelDateData[0] !== undefined){
        chart();
         show();
      }   
     }, [labelDateData]);
    
    
      //wrap this function in a setTimeout?
     const show = ()=>{
          if(showChart === true){
          return (
             <div className="chart">
             <Line data={chartData} options={{ responsive: true }} />
             </div>
            )   
       }
     } 
     

    const empty = ()=>{
      return <div className="error"><p>{emptyTerm}</p></div>
    }
  
    const invalidTerm = ()=>{
      setTimeout(()=>{
        if(formRan === true && labelDateData[0] !== undefined){
          return <div className="error"><p>Please enter a valid symbol.</p></div>
         }else{
          return <div></div>
         }
      }, 2000) 
     }
    
 
  

   return(
     <div>
       <SearchBar onFormSubmit={onFormSubmit} />
       {empty()}
       {invalidTerm()}
       <Header symbol={globalQuoteData["01. symbol"]} current={globalQuoteData["05. price"]} open={globalQuoteData["02. open"]} name={overview.Name} />
       {show()}
       <Description symbol={overview.Symbol} description={overview.Description} industry={overview.Industry} employees={overview.FullTimeEmployees} split={overview.LastSplitDate} />
     </div>
   )
}



export default App;