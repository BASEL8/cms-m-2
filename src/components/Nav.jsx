import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LogoSvg from "./svg/LogoSvg";
import CartSvg from "./svg/CartSvg";
import CartItem from "./CartItem";
import Search from "./Search";
import { fetchData } from "../actions/fetchData";

const Nav = ({ fetchData, cartReducer: { items, totalPrice, totalItems } }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [toggleCart, setToggleCart] = useState(false);
  const cart = useRef();
  const search = useRef();

  OnClickOutside(search, setSearchActive);
  OnClickOutside(cart, setToggleCart);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div
      style={{ width: "100vw" }}
      className='shadow mb-2 p-0 topNav d-flex flex-column'
    >
      <div
        className='d-flex justify-content-around bg-light text-muted align-items-center font-weight-bolder pl-5 pr-5'
        style={{ fontSize: 10, height: 30 }}
      >
        <div
          style={{ flex: 1 }}
          className='  d-flex d-flex justify-content-start align-items-center'
        >
          <p className='border-bottom border-dark m-0'>
            ALLA SVERIGES
            <span style={{ color: "#FF4E00" }}> FAVORITMÄRKEN</span>
          </p>
        </div>
        <div
          style={{ flex: 1 }}
          className='d-flex justify-content-center align-items-center'
        >
          <p className='border-bottom border-dark m-0'>
            <span style={{ color: "#FF4E00" }}>FRI FRAKT</span> OCH RETUR*
          </p>
        </div>
        <div style={{ flex: 1 }} className='   d-flex justify-content-end'>
          <p className='border-bottom border-dark m-0'>
            <span style={{ color: "#FF4E00" }}>100 DAGARS</span> ÖPPET KÖP
          </p>
        </div>
      </div>
      <div className='pl-5 pr-5 p-2 w-100 d-flex justify-content-around align-items-center '>
        <div style={{ flex: 1 }} className=' '>
          <ul className='d-flex m-0  pr-5 align-items-center justify-content-between'>
            <li className='flex-grow-1'>
              <Link to='/category/women'>KVINNA</Link>
            </li>
            <li className='flex-grow-1 d-flex justify-content-center'>
              <Link to='/category/man'>MAN</Link>
            </li>
            <li className='flex-grow-1 d-flex justify-content-center'>
              <Link to='/category/kids'>BARN</Link>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1 }} className=' d-flex justify-content-center'>
          <Link to='/'>
            <LogoSvg />
          </Link>
        </div>
        <div
          style={{ flex: 1 }}
          className='d-flex justify-content-end align-items-center position-relative '
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
            <div className='cart p-2 d-flex flex-column shadow-sm' ref={cart}>
              <h6 className='text-center p-4 font-weight-bold'>
                Shopping cart
              </h6>
              <div className='flex-grow-1  overflow-auto'>
                {items &&
                  items.map(item => (
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

                <Link to='/shoppingCart/' className='w-100'>
                  <button className='buttonBgColor p-2 rounded border-0 text-light w-100'>
                    to Shopping Cart
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='d-flex justify-content-around align-items-center font-weight-bolder pt-2 pb-2  pl-5 pr-5'>
        {!searchActive && (
          <ul
            className='d-flex m-0 flex-grow-1'
            style={{ fontSize: 11, fontWeight: 100 }}
          >
            <li className='mr-3 text-sm'>Athleisure</li>
            <li className='mr-3 text-sm'>Nytt</li>
            <li className='mr-3 text-sm'>Kläder</li>
            <li className='mr-3 text-sm'>Skor</li>
            <li className='mr-3 text-sm'>Sport</li>
            <li className='mr-3 text-sm'>Accessoarer</li>
            <li className='mr-3 text-sm'>Designers</li>
            <li className='mr-3 text-sm'>Beauty</li>
            <li className='mr-3 text-sm'>Märken</li>
            <li className='mr-3 text-sm'>Outlet</li>
          </ul>
        )}
        <div
          className='search'
          style={{ flex: searchActive ? 1 : 0 }}
          ref={search}
        >
          <div className='d-flex  d-flex justify-content-center align-items-center'>
            {searchActive && <span className='w-25'></span>}
            <Search setSearchActive={setSearchActive} />

            {searchActive && (
              <span
                className='w-25 text-right'
                onClick={() => setSearchActive(false)}
              >
                <svg
                  enableBackground='new 0 0 100 100'
                  id='Layer_1'
                  version='1.1'
                  height='20'
                  width='20'
                  viewBox='0 0 100 100'
                >
                  <polygon
                    fill='#010101'
                    points='77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 '
                  />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ cartReducer }) => ({
  cartReducer
});
export default connect(
  mapStateToProps,
  { fetchData }
)(Nav);

function OnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
