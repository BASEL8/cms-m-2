import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItemShoppingCart";
import { Link } from "react-router-dom";
const ShoppingCart = ({ cartReducer: { items, totalPrice, totalItems } }) => {
  console.log(totalPrice);
  // const totalItems = items.reduce(function(previous, current) {
  //   return previous + current.amount;
  // }, 0);
  // const totalPrice = items.reduce(function(previous, current) {
  //   return previous + current.totalPrice;
  // }, 0);
  return (
    <div className='flex-grow-1 ml-5 mr-5 p-3 w-75 d-flex justify-content-stretch align-items-stretch'>
      <div className='mr-4 p-3 bg-light' style={{ flex: 3 }}>
        <div className='p-2 bg-white shadow-sm'>
          <p className='font-wight-bold' style={{ fontWeight: "bold" }}>
            Shopping Cart - ( {totalItems} ) items
          </p>
          {items.map(item => (
            <CartItem totalItems={totalItems} key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className='bg-light p-3 pt-2' style={{ flex: 2, fontSize: 15 }}>
        <div className='bg-white p-3 shadow-sm'>
          <p style={{ fontSize: 25, fontWeight: "bold" }}>Total</p>
          <div className='d-flex justify-content-between'>
            <p>Subtotal</p>
            <p>{totalPrice} kr</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p>Shipping</p>
            <p>free</p>
          </div>
          <div className='d-flex justify-content-between border-top border-secondary pt-3'>
            <p>Total (incl. VAT)</p>
            <p>{totalPrice} kr</p>
          </div>
          <div>
            <Link to='/checkout' className='w-100'>
              <button className='btn buttonBgColor w-100 text-white'>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({ cartReducer });
export default connect(mapStateToProps)(ShoppingCart);
