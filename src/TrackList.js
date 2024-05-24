import React, { Component } from 'react';
import './TrackList.css';
import Track from './Track';

class Tracklist extends Component {
  render() {
    return (
      <div className="Tracklist">
        {this.props.tracks.map(track => (
          <Track
            key={track.id}
            track={track}
            onAddTrack={this.props.onAddTrack}
            onRemoveTrack={this.props.onRemoveTrack}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default Tracklist;
