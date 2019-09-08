import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogoSvg from "./svg/LogoSvg";
import CartSvg from "./svg/CartSvg";
import CartItem from "./CartItem";
const Nav = ({ cartReducer }) => {
  const [toggleCart, setToggleCart] = useState(false);
  const { items } = cartReducer;
  const total = items.reduce(function(previous, current) {
    return previous + current.amount;
  }, 0);

  return (
    <div className='w-75 d-flex justify-content-between align-items-center topNav'>
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
      <div className='flex-grow-1 d-flex justify-content-end align-items-center position-relative'>
        <CartSvg setToggleCart={setToggleCart} toggleCart={toggleCart} />
        <p style={{ fontSize: 15 }}>{total}</p>
        {toggleCart && (
          <div className='cart p-2 d-flex flex-column'>
            <h6 className='text-center p-4 font-weight-bold'>Shopping cart</h6>
            {items.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({ cartReducer });
export default connect(mapStateToProps)(Nav);
