import React from 'react';
import './Track.css';

const Track = (props) => {
  const { name, artist, album } = props.track;

  const handleAddClick = () => {
    // Call the method to add the track to the custom playlist
    props.onAddTrack(props.track);
  };

  const handleRemoveClick = () => {
    // Call the method to remove the track from the custom playlist
    props.onRemoveTrack(props.track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist} | {album}</p>
      </div>
      {props.isRemoval ? (
        <button className="Track-action" onClick={handleRemoveClick}>-</button>
      ) : (
        <button className="Track-action" onClick={handleAddClick}>+</button>
      )}
    </div>
  );
}

export default Track;

