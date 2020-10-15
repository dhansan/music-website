import React from 'react';
import Nav from '../ui/Nav';

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="wrapper">
          <div className="logo"></div>
          <Nav />
          <div className="home__caption">EXPLORE NEW ALBUM</div>
        </div>
        <div className="home__scroll-down"></div>
      </div>
    </div>
  );
};

export default Home;
