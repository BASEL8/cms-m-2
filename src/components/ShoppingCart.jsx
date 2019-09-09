import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const ShoppingCart = ({ cartReducer: { items } }) => {
  console.log(items.length);
  const totalItems = items.reduce(function(previous, current) {
    return previous + current.amount;
  }, 0);
  const totalPrice = items.reduce(function(previous, current) {
    return previous + current.totalPrice;
  }, 0);
  return (
    <div className='flex-grow-1 ml-5 mr-5 bg-danger w-75 d-flex justify-content-stretch align-items-stretch'>
      <div className='bg-info' style={{ flex: 3 }}>
        <p className='p-4 font-wight-bold'>
          Shopping Cart - ( {totalItems} ) items
        </p>
        {items.map(item => (
          <CartItem totalItems={totalItems} key={item._id} item={item} />
        ))}
      </div>
      <div className='bg-warning' style={{ flex: 2 }}>
        2
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({ cartReducer });
export default connect(mapStateToProps)(ShoppingCart);
