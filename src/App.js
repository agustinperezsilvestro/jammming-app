// src/App.js

import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { id: 1, name: 'Song1', artist: 'Artist1', album: 'Album1' },
        { id: 2, name: 'Song2', artist: 'Artist2', album: 'Album2' }
      ],
      playlistTracks: [
        { id: 3, name: 'PlaylistSong1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1' }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    );
  }
}

export default App;
