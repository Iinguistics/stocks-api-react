import React from 'react';
import SearchBar from '../components/SearchBar';
import CompanyOverview from'../components/CompanyOverview';
import CompanyDescription from '../components/CompanyDescription';
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
       <CompanyOverview name={this.state.COMPANY_OVERVIEW.Name}  symbol={this.state.COMPANY_OVERVIEW.Symbol}  exchange={this.state.COMPANY_OVERVIEW.Exchange} asset={this.state.COMPANY_OVERVIEW.AssetType} fiftyDay={this.state.COMPANY_OVERVIEW["50DayMovingAverage"]}
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
