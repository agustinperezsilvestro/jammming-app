import React, { Component } from 'react';
import './Playlist.css';
import Tracklist from './TrackList.js'; // Import Tracklist component

class Playlist extends Component {
  // Method to handle removing a track from the playlist
  removeTrack = (track) => {
    this.props.onRemove(track); // Call the onRemove function passed down from App.js
  };

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        {/* Pass the removeTrack method down to the Tracklist component */}
        <Tracklist tracks={this.props.playlistTracks} onRemove={this.removeTrack} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;

