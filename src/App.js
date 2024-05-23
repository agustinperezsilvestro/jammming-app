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

  // Method to add a selected song from search results to playlist
  addTrackToPlaylist = (track) => {
    // Check if the track is already in the playlist
    const isTrackInPlaylist = this.state.playlistTracks.some((playlistTrack) => playlistTrack.id === track.id);
    
    // If the track is not already in the playlist, add it
    if (!isTrackInPlaylist) {
      this.setState((prevState) => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
          <Playlist playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    );
  }
}

export default App;
