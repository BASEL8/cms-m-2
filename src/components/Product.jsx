import React, { useEffect, useState } from "react";
import BuyButton from "./Buttons/BuyButton";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/fetchData";
const Product = ({
  fetchProduct,
  fetchDataReducer: { product },
  match: {
    params: { id }
  }
}) => {
  const [mainImage, setMainImage] = useState();
  const [amount, setAmount] = useState(1);
  const [amountError, setError] = useState(null);
  useEffect(() => {
    fetchProduct(id, setMainImage);
  }, [fetchProduct, id]);
  const { name, price, description, availability, images } = product;
  return (
    <div
      className='flex-grow-1 w-100 h-100 p-2 pt-5 flex-md-row flex-column d-flex align-items-stretch justify-content-center flex-wrap
    '
    >
      <div className='flex-grow-1 d-flex justify-content-center align-items-start col'>
        <div className='h-100'>
          {images &&
            images.map((image, index) => (
              <div
                key={index}
                className='pb-1 mb-1 sideImage'
                onMouseOver={() =>
                  setMainImage(`http://localhost:9090${image.path}`)
                }
              >
                <img
                  src={`http://localhost:9090${image.path}`}
                  alt={image.title}
                  className='h-100'
                />
              </div>
            ))}
        </div>
        <div className='flex-grow-1'>
          <img src={mainImage} alt='' className='product_image_' />
        </div>
      </div>
      <div className='flex-grow-1 d-flex flex-column justify-content-start align-items-start col '>
        <h3>{name}</h3>
        <p style={{ fontSize: 12 }}>
          <strong>color</strong>: red
        </p>
        <h6>{availability}</h6>
        <h5>{price} kr</h5>
        <h5>{description}</h5>
        <input
          type='number'
          value={amount}
          max={availability}
          onChange={e => setAmount(parseInt(e.target.value))}
          className='p-2 border-0 rounded'
        />
        <div className='w-100 pt-3 d-flex align-items-center'>
          <BuyButton product={product} amount={amount} setError={setError} />
          <button className='btn p-2 bg-danger text-light'>
            <svg
              className='dx-icon _8lxbtC PoQAPA'
              height='40px'
              width='40px'
              focusable='false'
              fill='currentColor'
              viewBox='0 0 16 16'
              aria-hidden='true'
            >
              <path d='M5.2 3.5C7 3.5 8 5.8 8 5.8s1-2.3 2.8-2.3a2 2 0 0 1 .6.1 2.2 2.2 0 0 1 1.2 1 3.4 3.4 0 0 1-.1 3.3A17.6 17.6 0 0 1 8 12.3a17.7 17.7 0 0 1-4.5-4.4 3.4 3.4 0 0 1-.1-3.2 2.2 2.2 0 0 1 1.2-1 2 2 0 0 1 .6-.2m5.6-1A3.6 3.6 0 0 0 8 4.1a3.6 3.6 0 0 0-2.8-1.6 3 3 0 0 0-1 .2 3.2 3.2 0 0 0-1.7 1.5 4.4 4.4 0 0 0 .2 4.3c1.5 2.5 5.3 5 5.3 5s3.8-2.5 5.3-5a4.4 4.4 0 0 0 .2-4.3 3.2 3.2 0 0 0-1.8-1.5 3 3 0 0 0-1-.2z'></path>
            </svg>
          </button>
        </div>
        <p>{amountError}</p>
      </div>
      <div className='p-5 bg-danger w-100'></div>
    </div>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Product);
