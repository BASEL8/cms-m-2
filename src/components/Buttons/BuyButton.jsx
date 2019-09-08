import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
const BuyButton = ({ product, addToCart, cartReducer, amount, setError }) => {
  const { error } = cartReducer;
  setError(error);
  const { price } = product;
  return (
    <>
      <button
        className='btn h-100 flex-grow-1 p-2 bg-danger mr-4 text-light'
        onClick={() =>
          addToCart({
            ...product,
            amount,
            totalPrice: parseInt(price) * parseInt(amount)
          })
        }
      >
        Buy
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
