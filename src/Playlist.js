
import React, { Component } from 'react';
import './Playlist.css';
import Tracklist from './TrackList.js'; // Import Tracklist component

class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"} />
        <Tracklist tracks={this.props.playlistTracks} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;
