import React, { Component } from 'react';

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
       </React.Fragment>
    );
  }
}

export default SearchBar;