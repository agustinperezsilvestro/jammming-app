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
        { id: 1, name: 'Song1', artist: 'Artist1', album: 'Album1', uri: 'spotify:track:1' },
        { id: 2, name: 'Song2', artist: 'Artist2', album: 'Album2', uri: 'spotify:track:2' }
      ],
      playlistTracks: [
        { id: 3, name: 'PlaylistSong1', artist: 'PlaylistArtist1', album: 'PlaylistAlbum1', uri: 'spotify:track:3' }
      ],
      playlistName: 'New Playlist'
    };
  }

  // Method to add a selected song from search results to playlist
  addTrackToPlaylist = (track) => {
    const isTrackInPlaylist = this.state.playlistTracks.some(playlistTrack => playlistTrack.id === track.id);
    if (!isTrackInPlaylist) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  };

  // Method to remove a selected song from the playlist
  removeTrackFromPlaylist = (track) => {
    this.setState(prevState => ({
      playlistTracks: prevState.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
    }));
  };

  // Method to change the playlist name
  updatePlaylistName = (name) => {
    this.setState({ playlistName: name });
  };

  // Method to save the playlist
  savePlaylist = () => {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    const playlistName = this.state.playlistName;

    // Mock saving the playlist
    console.log(`Saving playlist "${playlistName}" with tracks:`, trackUris);

    // Reset the playlist after saving
    this.setState({ playlistTracks: [], playlistName: 'New Playlist' });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrackToPlaylist} />
          <Playlist
            playlistTracks={this.state.playlistTracks}
            playlistName={this.state.playlistName}
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
