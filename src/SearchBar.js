import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '' // Initialize state for the search term
    };
  }

  // Method to handle changes in the search input
  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value }); // Update searchTerm state with input value
  };

  // Method to handle search form submission
  handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Call the method from props to initiate the search with the current searchTerm
    this.props.onSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            placeholder="Enter a song, album, or artist"
            value={this.state.searchTerm}
            onChange={this.handleSearchChange}
          />
          <button type="submit" className="SearchButton">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
