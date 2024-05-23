import React from 'react';
import './Track.css';

const Track = (props) => {
  const { name, artist, album } = props.track;

  const handleClick = () => {
    // Call the method to add the track to the custom playlist
    props.onAddTrack(props.track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist} | {album}</p>
      </div>
      <button className="Track-action" onClick={handleClick}>+</button>
    </div>
  );
}

export default Track;
