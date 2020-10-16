import { render } from 'node-sass';
import React, { Fragment } from 'react';

const Button = ({ type, text, context, clickHandler }) => {
  const renderButton = () => {
    switch (type) {
      case 'submit':
        return (
          <button
            type="submit"
            className={`prim-button ${
              context ? 'prim-button--' + context : ''
            }`}
          >
            {text}
          </button>
        );
      default:
        return (
          <div className="primary-button" onClick={clickHandler}>
            {text}
          </div>
        );
    }
  };
  return <Fragment>{renderButton()}</Fragment>;
};

export default Button;
