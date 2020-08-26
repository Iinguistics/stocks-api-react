import React from 'react';
import SearchBar from '../components/SearchBar';
import CompanyOverview from'../components/CompanyOverview';
import axios from 'axios';

class App extends React.Component {
  state = {
              COMPANY_OVERVIEW: {},
             
             
    };

 



 onSearchSubmit = async (symbol) => {
  const key = 'S6JXB9Q8DEA16WF1';
  const overviewRes = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${key}`)
      
  this.setState({COMPANY_OVERVIEW: overviewRes.data})
  console.log(this.state.COMPANY_OVERVIEW)
 }



  render(){
    return (
      <div className="App">
       <SearchBar onSubmit= {this.onSearchSubmit} />
       <CompanyOverview name={this.state.COMPANY_OVERVIEW.Name}  symbol={this.state.COMPANY_OVERVIEW.Symbol}  description={this.state.COMPANY_OVERVIEW.Description} exchange={this.state.COMPANY_OVERVIEW.Exchange} />
      </div>
    );
  }
  
}

export default App;
