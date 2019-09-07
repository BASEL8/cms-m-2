import React from "react";

const Nav = () => {
  return (
    <div className='w-100 d-flex justify-content-between align-items-center'>
      <div className='flex-grow-1'>
        <ul className='d-flex m-0  align-items-center justify-content-start  '>
          <li className='mr-2'>man</li>
          <li className='mr-2'>women</li>
          <li className='mr-2'>kids</li>
        </ul>
      </div>
      <h1 className='flex-grow-1 m-0'>Zalando</h1>
      <div className='flex-grow-1 d-flex justify-content-end align-items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          className='dx-icon _8lxbtC PoQAPA'
          height='40px'
          width='40px'
          focusable='false'
          fill='currentColor'
          viewBox='0 0 16 16'
          aria-hidden='true'
        >
          <path
            d='M12.984 5H11V3.87A2.94 2.94 0 0 0 8 1a2.94 2.94 0 0 0-3 2.87V5H2.984l-1 9h12zM6 3.87A1.94 1.94 0 0 1 8 2a1.94 1.94 0 0 1 2 1.87V5H6zM3.102 13l.777-7H5v1h1V6h4v1h1V6h1.09l.777 7z'
            data-name='Layer 1'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Nav;
