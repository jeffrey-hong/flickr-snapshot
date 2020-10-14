import React, { Component } from 'react'

export default class SearchButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleSearch}>Search</button>
      </div>
    )
  }
}
