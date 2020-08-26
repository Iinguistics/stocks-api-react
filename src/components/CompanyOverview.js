import React from 'react';
import '../stylesheets/CompanyOverview.css';

class CompanyOverview extends React.Component {
 
    state = {overview: this.props.companyOverviewData}



   render(){
    return (
    <div className="container ">
       {this.state.overview.Symbol}
    </div>
    );
   }
}

export default CompanyOverview;