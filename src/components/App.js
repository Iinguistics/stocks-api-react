import React from 'react';
import SearchBar from '../components/SearchBar';
import CompanyOverview from'../components/CompanyOverview';
import axios from 'axios';

class App extends React.Component {
  state = {
              COMPANY_OVERVIEW: {},

    };





 onSearchSubmit = async (symbol) => {
  const apiKey = 'S6JXB9Q8DEA16WF1';
  const companyRes = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`)
      
  this.setState({COMPANY_OVERVIEW: companyRes.data})
  console.log(this.state.COMPANY_OVERVIEW)
 }



  render(){
    return (
      <div className="App">
       <SearchBar onSubmit = {this.onSearchSubmit} />
       <CompanyOverview companyOverviewData = {this.state.COMPANY_OVERVIEW} />
      </div>
    );
  }
  
}

export default App;
