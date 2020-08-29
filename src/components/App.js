import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import CompanyOverview from'../components/CompanyOverview';
import CompanyDescription from '../components/CompanyDescription';
import axios from 'axios';

class App extends React.Component {
  state = {
              COMPANY_OVERVIEW: {},
              GLOBAL_QUOTE: {},
              currentPrice: "" ,
              CURRENCY_EXCHANGE: {},
    };

 
    


 onSearchSubmit = async (symbol) => {
  const key = 'S6JXB9Q8DEA16WF1';
  // overview call
  const overviewRes = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${key}`)
  this.setState({COMPANY_OVERVIEW: overviewRes.data})
  // global quote call for current price
  const globalRes = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${key}`)
  this.setState({GLOBAL_QUOTE: globalRes.data})
  console.log(this.state.GLOBAL_QUOTE);
  this.setState({currentPrice: globalRes.data["Global Quote"]["05. price"]})

  // exchange rate call for bid price & ask price, for header comp
  const exchangeRes = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${key}`)
  this.setState({CURRENCY_EXCHANGE: exchangeRes.data})
  console.log(this.state.CURRENCY_EXCHANGE);

 }

 

  render(){
    return (
      <div className="App">
       <SearchBar onSubmit= {this.onSearchSubmit} />
       <Header exchange={this.state.COMPANY_OVERVIEW.Exchange} symbol={this.state.COMPANY_OVERVIEW.Symbol} name={this.state.COMPANY_OVERVIEW.Name} currentPrice={this.state.currentPrice} />
       

       <CompanyOverview  asset={this.state.COMPANY_OVERVIEW.AssetType} fiftyDay={this.state.COMPANY_OVERVIEW["50DayMovingAverage"]}
       fiftyTwoHigh={this.state.COMPANY_OVERVIEW["52WeekHigh"]} fiftyTwoLow={this.state.COMPANY_OVERVIEW["52WeekLow"]} analyst={this.state.COMPANY_OVERVIEW.AnalystTargetPrice} dividendDate={this.state.COMPANY_OVERVIEW.DividendDate} dividendPerShare={this.state.COMPANY_OVERVIEW.DividendPerShare} dividendYield={this.state.COMPANY_OVERVIEW.DividendYield}
       payOutRatio={this.state.COMPANY_OVERVIEW.PayoutRatio} profitMargin={this.state.COMPANY_OVERVIEW.ProfitMargin} quarterlyEarningsGrowth={this.state.COMPANY_OVERVIEW.QuarterlyEarningsGrowthYOY} quarterlyRevenueGrowth={this.state.COMPANY_OVERVIEW.QuarterlyRevenueGrowthYOY} grossProfitTTM={this.state.COMPANY_OVERVIEW.GrossProfitTTM}
       lastSplitDate={this.state.COMPANY_OVERVIEW.LastSplitDate} fullTimeEmployees={this.state.COMPANY_OVERVIEW.FullTimeEmployees}
       
       />
       <CompanyDescription description={this.state.COMPANY_OVERVIEW.Description} />
      </div>
    );
  }
  
}

export default App;
