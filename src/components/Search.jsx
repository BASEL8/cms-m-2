import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Search = ({ setSearchActive, fetchDataReducer: { products } }) => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className=' border-bottom border-dark flex-grow-1 d-flex w-100 position-relative'>
      <div className=' border-bottom border-dark flex-grow-1 d-flex w-100 position-relative'>
        <input
          placeholder='Sök'
          className='border-0 pl-1 flex-grow-1 searchInput'
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          onFocus={() => setSearchActive(true)}
        />
        <svg
          width='25px'
          height='25px'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          viewBox='0 0 40 20'
        >
          <path d='M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z' />
        </svg>
      </div>
      {searchInput && (
        <div
          style={{ zIndex: 999999, left: 0, top: "111%", width: "100%" }}
          className='shadow-sm p-2 bg-light position-absolute '
        >
          {products
            .filter(
              ({ name }) =>
                searchInput && name.toLowerCase().indexOf(searchInput) !== -1
            )
            .map(({ name, _id, images }) => (
              <Link
                to={`/product/${_id}`}
                key={_id}
                style={{ height: 30 }}
                className='d-flex align-items-center '
                onClick={() => setSearchInput("")}
              >
                <div className='h-75 mr-2'>
                  <img
                    src={`http://localhost:9191${images[0].path}`}
                    alt={name}
                    className='h-100'
                  />
                </div>
                <div>{name}</div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({
  fetchDataReducer
});
export default connect(mapStateToProps)(Search);
