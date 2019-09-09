import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogoSvg from "./svg/LogoSvg";
import CartSvg from "./svg/CartSvg";
import CartItem from "./CartItem";
const Nav = ({ cartReducer }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const { items } = cartReducer;
  const totalItems = items.reduce(function(previous, current) {
    return previous + current.amount;
  }, 0);
  const totalPrice = items.reduce(function(previous, current) {
    return previous + current.totalPrice;
  }, 0);

  return (
    <div className='shadow-sm h-100 topNav p-3 d-flex justify-content-center align-items-center'>
      <div className='w-75 d-flex justify-content-between align-items-center '>
        <div className='flex-grow-1'>
          <ul className='d-flex m-0  align-items-center justify-content-start'>
            <li className='mr-2'>man</li>
            <li className='mr-2'>women</li>
            <li className='mr-2'>kids</li>
          </ul>
        </div>
        <Link to='/'>
          <LogoSvg />
        </Link>
        <div
          className='flex-grow-1 d-flex justify-content-end align-items-center position-relative'
          onClick={() => setToggleCart(!toggleCart)}
        >
          <CartSvg />
          <p
            style={{ fontSize: 10, minWidth: 20, minHeight: 20 }}
            className='rounded-circle  d-flex justify-content-center align-items-center buttonBgColor text-white'
          >
            {totalItems}
          </p>
          {toggleCart && (
            <div className='cart p-2 d-flex flex-column shadow-sm'>
              <h6 className='text-center p-4 font-weight-bold'>
                Shopping cart
              </h6>
              <div className='flex-grow-1  overflow-auto'>
                {items.map(item => (
                  <CartItem
                    totalItems={totalItems}
                    key={item._id}
                    item={item}
                  />
                ))}
              </div>
              <div className='p-1 pt-3 d-flex flex-column'>
                <div className=' d-flex justify-content-between align-items-center'>
                  <p>shipping</p>
                  <p style={{ fontSize: 10, fontWeight: 300 }}>Free</p>
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                  <p>Total</p>
                  <p style={{ fontSize: 15 }}>{totalPrice}</p>
                </div>
                <button className='buttonBgColor p-2 rounded border-0 text-light'>
                  to Shopping Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({ cartReducer });
export default connect(mapStateToProps)(Nav);
