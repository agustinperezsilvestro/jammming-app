import React from 'react';
import './Track.css';

const Track = (props) => {
  const { name, artist, album } = props.track;

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>{artist} | {album}</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}

export default Track;
