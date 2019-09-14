import React from "react";
import ProductList from "./ProductList";
import Whirligig from "react-whirligig";
import LeftSVG from "./svg/left";
import RightSVG from "./svg/right";
const ProductsList = ({ products }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <div className='w-100 pt-2 d-flex justify-content-end'>
      {/* {products.map(product => (
        <ProductList product={product} key={product._id} />
      ))} */}
      <div className='w-100 pt-2 d-flex justify-content-end pb-5'>
        <button onClick={prev}>
          <LeftSVG />
        </button>
        <Whirligig
          visibleSlides={3}
          gutter='1em'
          ref={_whirligigInstance => {
            whirligig = _whirligigInstance;
          }}
          className='pt-2 d-flex overflow-y-auto productsSlider'
          style={{ width: "70%" }}
        >
          {products.map(product => (
            <ProductList product={product} key={product._id} />
          ))}
        </Whirligig>
        <button onClick={next}>
          <RightSVG />
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
