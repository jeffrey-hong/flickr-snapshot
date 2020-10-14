import React, { Component } from 'react';
import SearchButton from './SearchButton.jsx'

class SearchBar extends Component { 
  handleSearch = (searchText) => {
    console.log(searchText);
  }

  render () {
    return (
       <React.Fragment>
        <label htmlFor="search">Search</label>
        <input type="text" 
               onChange={this.props.searchWordOnChange} 
        />
        <SearchButton handleSearch={this.handleSearch} />
       </React.Fragment>
    );
  }
}

export default SearchBar;