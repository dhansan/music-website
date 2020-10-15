import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="main-nav">
      <Link to="/about">About</Link>
      <Link to="/discography">Discography</Link>
      <Link to="/tour">Tour</Link>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Nav;
