
import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a Song Title" />
        <button>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;

