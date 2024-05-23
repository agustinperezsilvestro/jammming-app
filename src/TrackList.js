
import React, { Component } from 'react';
import './TrackList.css'
import Track from './Track'; // Import Track component

class Tracklist extends Component {
  render() {
    return (
      <div className="Tracklist">
        {this.props.tracks.map(track => (
          <Track key={track.id} track={track} />
        ))}
      </div>
    );
  }
}

export default Tracklist;
