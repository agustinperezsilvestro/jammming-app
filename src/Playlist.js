import React, { Component } from 'react';
import './Playlist.css';
import Tracklist from './TrackList.js';

class Playlist extends Component {
  handleNameChange = (event) => {
    this.props.onNameChange(event.target.value);
  };

  render() {
    return (
      <div className="Playlist">
        <input value={this.props.playlistName} onChange={this.handleNameChange} />
        <Tracklist tracks={this.props.playlistTracks} onRemoveTrack={this.props.onRemove} isRemoval={true} />
        <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default Playlist;

