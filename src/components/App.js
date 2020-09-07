import React from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import MainData from '../components/MainData';
import CompanyOverview from'../components/CompanyOverview';
import CompanyDescription from '../components/CompanyDescription';
import axios from 'axios';
import Test from '../components/Test';

class App extends React.Component {
  state = {
              symbol:"",
              COMPANY_OVERVIEW: {},
              GLOBAL_QUOTE: {},
              currentPrice: "" ,
              CURRENCY_EXCHANGE: {},
              TIME_SERIES_DAILY: {},
            
    };

 
    


 onSearchSubmit = async (symbol) => {
  const key = 'S6JXB9Q8DEA16WF1';
  this.setState({symbol: symbol});
  console.log(this.state.symbol)

 
  

 }
 
  
 
  render(){
    return (
      <div className="App">
       <SearchBar onSubmit= {this.onSearchSubmit} />
       <MainData symbol={this.state.symbol} />

<Header exchange={this.state.COMPANY_OVERVIEW.Exchange} symbol={this.state.COMPANY_OVERVIEW.Symbol} name={this.state.COMPANY_OVERVIEW.Name} currentPrice={this.state.currentPrice}
fiftyTwoHigh={this.state.COMPANY_OVERVIEW["52WeekHigh"]}  fiftyTwoLow={this.state.COMPANY_OVERVIEW["52WeekLow"]}
/>




<CompanyOverview  asset={this.state.COMPANY_OVERVIEW.AssetType} fiftyDay={this.state.COMPANY_OVERVIEW["50DayMovingAverage"]}
analyst={this.state.COMPANY_OVERVIEW.AnalystTargetPrice} dividendDate={this.state.COMPANY_OVERVIEW.DividendDate} dividendPerShare={this.state.COMPANY_OVERVIEW.DividendPerShare} dividendYield={this.state.COMPANY_OVERVIEW.DividendYield}
payOutRatio={this.state.COMPANY_OVERVIEW.PayoutRatio} profitMargin={this.state.COMPANY_OVERVIEW.ProfitMargin} quarterlyEarningsGrowth={this.state.COMPANY_OVERVIEW.QuarterlyEarningsGrowthYOY} quarterlyRevenueGrowth={this.state.COMPANY_OVERVIEW.QuarterlyRevenueGrowthYOY} grossProfitTTM={this.state.COMPANY_OVERVIEW.GrossProfitTTM}
lastSplitDate={this.state.COMPANY_OVERVIEW.LastSplitDate} fullTimeEmployees={this.state.COMPANY_OVERVIEW.FullTimeEmployees} 

/>
<CompanyDescription description={this.state.COMPANY_OVERVIEW.Description} address={this.state.COMPANY_OVERVIEW.Address} />
       <Test currentDate={this.state.currentDate}/>
      </div>
    );
  }
  
}

export default App;
