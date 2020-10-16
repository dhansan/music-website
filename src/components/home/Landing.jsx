import React from 'react';
import { album } from '../../data/albums';

const Landing = () => {
  const silenceAlbum = album.filter((album) => album.id === 1)[0];
  return (
    <div className="landing">
      <div className="wrapper"></div>
    </div>
  );
};

export default Landing;
