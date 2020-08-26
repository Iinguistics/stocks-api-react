import React from 'react';
import '../stylesheets/SearchBar.css';

class SearchBar extends React.Component {
   state = { symbol: '' };

  onFormSubmit = (event) =>{
     event.preventDefault();
     this.props.onSubmit(this.state.symbol);
  };



   render(){
    return (
    <div className="search-bar container">
      <form onSubmit={this.onFormSubmit}>
      <label onClick={this.sendDataFromChild}>Stock Search</label>
       <input
       type="text" 
       placeholder="Symbol"
       className="form-input"
       value={this.state.symbol} 
       onChange={(e)=> this.setState({ symbol: e.target.value })} />
       <input 
       type="submit"
       value="Search" 
       className="ui secondary button"
       />
      </form>
    </div>
    );
   }
}

export default SearchBar;