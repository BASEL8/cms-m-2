import React from "react";
import ScrollProducts from "./ScrollProducts";
const ViewedProducts = ({ viewed }) => {
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  return viewed.length > 0 ? (
    <div
      className='pt-3 mt-3 pb-3 mb-3 w-100 border-top border-light bg-light shadow-sm'
      id='viewedProducts'
    >
      <div className='text-uppercase' style={{ fontSize: 15 }}>
        last viewed products
      </div>
      <ScrollProducts
        shuffle={shuffle}
        products={viewed}
        viewThumbnail={false}
      />
    </div>
  ) : null;
};

export default ViewedProducts;
