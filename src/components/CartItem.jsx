import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/cartActions";
const CartItem = ({
  item: { name, amount, images, price, description, totalPrice, _id },
  removeProduct
}) => {
  return (
    <div className='w-100 cartItem d-flex p-2'>
      {name && (
        <>
          <div className='col-4 d-flex justify-content-center align-items-center'>
            <img
              src={`http://localhost:9191${images[0].path}`}
              className='h-75'
              alt={name}
            />
          </div>
          <div className='col-8 d-flex flex-column'>
            <div className='d-flex w-100 justify-content-between'>
              <div>{name}</div>
              <div>{totalPrice} kr</div>
            </div>
            <div className='flex-grow-1 pt-2'>
              <div> quantity : {amount}</div>
              <div>item price : {price} kr</div>
            </div>
            <div className='d-flex w-100 justify-content-between'>
              <button className='btn  btn-sm w-100  border-right cartItemButton'>
                Add to wishlist
              </button>
              <button
                className='btn border-0 w-100 btn-sm cartItemButton'
                onClick={() => removeProduct(_id)}
              >
                Remove product
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default connect(
  null,
  { removeProduct }
)(CartItem);
