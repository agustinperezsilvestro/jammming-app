import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import Spotify from './Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
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

  // Method to remove a track from the playlist
  removeTrackFromPlaylist = (track) => {
    this.setState((prevState) => ({
      playlistTracks: prevState.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    }));
  };

  // Method to update the playlist name
  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  // Method to search for tracks using the Spotify API
  search = (term) => {
    Spotify.search(term).then(searchResults => {
      this.setState({ searchResults: searchResults });
    });
  };

  // Method to save the playlist to Spotify
  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    const playlistName = this.state.playlistName;
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      // Reset the playlist name and tracks after saving
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
      // Clear the search results after saving
      this.setState({ searchResults: [] });
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
          <Playlist 
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrackFromPlaylist}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    );
  }
}

export default App;
