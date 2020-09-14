import React, {useState} from 'react';
import '../stylesheets/SearchBar.css';



const SearchBar = ({ onFormSubmit })=>{
  const [term, setTerm] = useState("");


   const formSubmit = (e)=>{
      e.preventDefault();
      onFormSubmit(term);
   }
  





  return (
   <div className="search-bar container">
     <form onSubmit={formSubmit}>
     <label>Stock Search</label>
      <input
      type="text" 
      placeholder="Symbol"
      className="form-input"
      value={term} 
      onChange={(e)=> setTerm(e.target.value)} />
      <input 
      type="submit"
      value="Search" 
      className="ui secondary button"
      />
     </form>
   </div>
   );

}



export default SearchBar;