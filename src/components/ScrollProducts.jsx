import React from "react";
import ProductList from "./ProductList";
import Whirligig from "react-whirligig";
import LeftSVG from "./svg/left";
import RightSVG from "./svg/right";
const ScrollProducts = ({ products, shuffle, viewThumbnail }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div className='w-100 d-flex justify-content-end'>
      <div className='w-100 pt-1 d-flex justify-content-end pb-5'>
        <button onClick={prev} className='btn btn-sm'>
          <LeftSVG />
        </button>
        <Whirligig
          visibleSlides={3}
          gutter='10px'
          ref={_whirligigInstance => {
            whirligig = _whirligigInstance;
          }}
          className='pt-2 d-flex overflow-y-auto productsSlider w-md-75 w-100'
        >
          {shuffle(products).map(product => (
            <ProductList
              product={product}
              key={product._id}
              viewThumbnail={viewThumbnail}
            />
          ))}
        </Whirligig>
        <button onClick={next} className='btn btn-sm'>
          <RightSVG />
        </button>
      </div>
    </div>
  );
};
export default ScrollProducts;
