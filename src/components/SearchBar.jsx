import React, { Component } from 'react';
import SearchButton from './SearchButton';

class SearchBar extends Component { 
  handleEnter = (e) => {
    if (e.key === 'Enter') {
      this.props.setSearchWord();
    }
  }

  render () {
    return (
       <div className={searchBar}>
        <input type="text" 
               onChange={this.props.searchWordOnChange} 
               onKeyUp={this.handleEnter}
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