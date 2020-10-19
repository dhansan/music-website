import React, { Component } from 'react';

class ShopItem extends Component {
  state = {
    sizeError: false,
    selectedSize: '',
    purchased: false,
  };

  handlePurcahsed = () => {
    const { selectedSize, sizeError } = this.state;
  };
  render() {
    return <div></div>;
  }
}

export default ShopItem;
