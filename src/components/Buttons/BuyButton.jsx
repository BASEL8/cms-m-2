import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
const BuyButton = ({ product, addToCart, cartReducer, amount, setError }) => {
  const { error, items } = cartReducer;
  setError(error);

  const { price } = product;
  return (
    <>
      <button
        className='btn h-100 flex-grow-1 p-2 pl-4 pr-4  mr-4 text-light d-flex justify-content-between buttonBgColor font-weight-bold'
        onClick={() => {
          addToCart({
            ...product,
            amount,
            totalPrice: parseInt(price) * parseInt(amount)
          });
        }}
      >
        Buy
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          height='20px'
          width='20px'
          focusable='false'
          fill='white'
          aria-hidden='true'
        >
          <path
            d='M12.984 5H11V3.87A2.94 2.94 0 0 0 8 1a2.94 2.94 0 0 0-3 2.87V5H2.984l-1 9h12zM6 3.87A1.94 1.94 0 0 1 8 2a1.94 1.94 0 0 1 2 1.87V5H6zM3.102 13l.777-7H5v1h1V6h4v1h1V6h1.09l.777 7z'
            data-name='Layer 1'
          ></path>
        </svg>
      </button>
    </>
  );
};
const mapStateToProps = ({ cartReducer }) => ({
  cartReducer
});
export default connect(
  mapStateToProps,
  { addToCart }
)(BuyButton);
