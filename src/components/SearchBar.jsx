import React, { Component } from 'react';
import SearchButton from './SearchButton';

class SearchBar extends Component { 
  handleSearch = (searchText) => {
    console.log(searchText);
  }

  render () {
    return (
       <div className={searchBar}>
        <input type="text" 
               onChange={this.props.searchWordOnChange} 
        />
        <SearchButton setSearchWord={this.props.setSearchWord} />
       </div>
    );
  }
}

const searchBar = {
  'padding': '25px',
}

export default SearchBar;