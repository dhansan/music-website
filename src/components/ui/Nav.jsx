import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const { context } = props;
  return (
    <div className={`main-nav main-nav--${context}`}>
      <Link className="main-nav__item" to="/about">
        About
      </Link>
      <Link className="main-nav__item" to="/discography">
        Discography
      </Link>
      <Link className="main-nav__item" to="/tour">
        Tour
      </Link>
      <Link className="main-nav__item" to="/shop">
        Shop
      </Link>
    </div>
  );
};

export default Nav;
