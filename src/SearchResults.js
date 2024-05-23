import React, { Component } from 'react';
import './SearchResults.css';
import Tracklist from './TrackList.js'; // Import Tracklist component

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={this.props.searchResults} onAddTrack={this.props.onAdd} />
      </div>
    );
  }
}

export default SearchResults;