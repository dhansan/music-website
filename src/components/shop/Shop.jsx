import React from 'react';

const Shop = () => {
  const shopTShirts = shop.filter((item) => item.type === 't-shirts');
  const shopHoodies = shop.filter((item) => item.type === 'hoodies');
  const shopHats = shop.filter((item) => item.type === 'hats');

  const renderItems = (shopItems) =>
    shopItems.map((shopItem, i) => <ShopItem {...shopItem} key={i} />);
  return (
    <div className="wrapper">
      <div className="shop"></div>
    </div>
  );
};

export default Shop;
