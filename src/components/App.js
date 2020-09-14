import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';




const App = ()=> {
  const [timeSeriesData, setTimeSeriesData] = useState({});
  const [globalQuoteData, setglobalQuoteData] = useState({});
  const [overview, setOverview] = useState({});




   const onFormSubmit = async(term)=>{
         const KEY = 'S6JXB9Q8DEA16WF1';
        
         // Global Quote call
         //const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term}&apikey=${KEY}`);
         //setglobalQuoteData(response.data["Global Quote"]);

         // Company Overview call
         const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${term}&apikey=${KEY}`);
         setOverview(response.data);

         

        // Time series daily call
         //const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${term}&apikey=${KEY}`);
        // setTimeSeriesData(response.data["Time Series (Daily)"]);
        
       
       
            
  }

  //const timeSeriesDataArr = Object.keys(timeSeriesData);
  //console.log(timeSeriesDataArr[0]);

  //const dailyQuoteDataArr = Object.keys(globalQuoteData);
  
  console.log(overview);


   return(
     <div>
       <SearchBar onFormSubmit={onFormSubmit} />
       <Header symbol={globalQuoteData["01. symbol"]} current={globalQuoteData["05. price"]} open={globalQuoteData["02. open"]} name={overview.Name} />
     </div>
   )
}



export default App;