import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Gallery from './Gallery';
import SearchButton from './SearchButton';
import { api, api_key } from '../api'

class Container extends Component {
  state = {
    photos: null,
    searchWord: `mountain`, // default to mountain
  }

  getPhotos = (tag) => {
    const api_call = api + `api_key=${api_key}&tags=${tag}&format=json&nojsoncallback=1`
    return fetch(api_call)
      .then((res) => res.json())
      .then((resolved) => { this.setState({ photos: (resolved && resolved.photos) ? resolved.photos.photo : null }) });
  }

  searchWordOnChange = (event) => {
    this.setState({ searchWord: event.target.value });
    console.log(this.state.searchWord);
  }

  componentDidMount = () => {
    this.setSearchWord();
  }

  setSearchWord = () => {
    console.log(this.state.searchWord);
    this.getPhotos(this.state.searchWord);
  }

  render () {
    return (
      <div>
       <SearchBar 
        searchWord={this.state.searchWord} 
        searchWordOnChange={this.searchWordOnChange} 
       />
       <SearchButton setSearchWord={this.setSearchWord} />
       <Gallery photos={this.state.photos} />
      </div>
    );
  }
}

export default Container;