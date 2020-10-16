import React, { Component } from 'react';
import SearchButton from './SearchButton';
import PopularTags from './PopularTags';

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
        <PopularTags hotTags={this.props.hotTags} />
       </div>
    );
  }
}

const searchBar = {
  'padding': '25px',
}

export default SearchBar;