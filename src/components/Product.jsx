import React, { useEffect, useState } from "react";
import BuyButton from "./Buttons/BuyButton";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/fetchData";
import ProductTabs from "./ProductTabs";
import { Link } from "react-router-dom";
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
  const {
    name,
    price,
    description,
    availability,
    images,
    reviews,
    color,
    _id
  } = product;

  return (
    <div
      className='flex-grow-1 w-100 h-100 p-2  flex-md-row flex-column d-flex align-items-stretch justify-content-center flex-wrap text-capitalize
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
                  setMainImage(`http://localhost:9191${image.path}`)
                }
              >
                <img
                  src={`http://localhost:9191${image.path}`}
                  alt={image.title}
                  className='h-100'
                />
              </div>
            ))}
        </div>
        <div className='flex-grow-1 d-flex justify-content-center align-items-start'>
          <img src={mainImage} alt='' className='product_image_' />
        </div>
      </div>
      <div className='flex-grow-1 d-flex flex-column justify-content-start align-items-start col pb-5 '>
        <p
          style={{
            fontSize: 14,
            fontWeight: 500
          }}
        >
          marke >
        </p>
        <p
          style={{
            fontSize: 14,
            fontWeight: 700
          }}
        >
          {name}
        </p>
        <div className='d-flex'>
          {color &&
            color.length > 1 &&
            color.map(
              ({ value }) =>
                value.link && (
                  <Link
                    to={`/product/${value.link._id}`}
                    className='d-flex justify-content-center w-100'
                    key={value.link._id}
                  >
                    <div className='mr-1'>
                      <img
                        src={`http://localhost:9191${value.link.images[0].path}`}
                        alt={value.color}
                        style={{
                          height: 50,
                          borderBottom:
                            _id === value.link._id && "4px solid black",
                          marginBottom: 5
                        }}
                      />
                      <p style={{ fontSize: 11 }}>
                        <strong> {value.color}</strong>
                      </p>
                    </div>
                  </Link>
                )
            )}
        </div>

        <h5 style={{ fontWeight: 700, fontSize: 15 }}>
          {price} kr{" "}
          <span
            style={{
              fontWeight: 100,
              fontSize: 11,
              color: "#D1D1D1",
              paddingLeft: 8
            }}
          >
            Inkl.moms
          </span>
        </h5>
        <h6 style={{ fontWeight: 100, fontSize: 11 }}>
          In stock : {availability}
        </h6>
        <input
          type='number'
          value={amount}
          max={availability}
          min={1}
          onChange={e => setAmount(parseInt(e.target.value))}
          className='p-2 border rounded w-100'
        />
        <div className='w-100 pt-3 d-flex align-items-center'>
          <BuyButton product={product} amount={amount} setError={setError} />
          <button className='btn p-2 text-light border-dark'>
            <svg
              height='25px'
              width='25px'
              focusable='false'
              fill='black'
              viewBox='0 0 16 16'
              aria-hidden='true'
            >
              <path d='M5.2 3.5C7 3.5 8 5.8 8 5.8s1-2.3 2.8-2.3a2 2 0 0 1 .6.1 2.2 2.2 0 0 1 1.2 1 3.4 3.4 0 0 1-.1 3.3A17.6 17.6 0 0 1 8 12.3a17.7 17.7 0 0 1-4.5-4.4 3.4 3.4 0 0 1-.1-3.2 2.2 2.2 0 0 1 1.2-1 2 2 0 0 1 .6-.2m5.6-1A3.6 3.6 0 0 0 8 4.1a3.6 3.6 0 0 0-2.8-1.6 3 3 0 0 0-1 .2 3.2 3.2 0 0 0-1.7 1.5 4.4 4.4 0 0 0 .2 4.3c1.5 2.5 5.3 5 5.3 5s3.8-2.5 5.3-5a4.4 4.4 0 0 0 .2-4.3 3.2 3.2 0 0 0-1.8-1.5 3 3 0 0 0-1-.2z'></path>
            </svg>
          </button>
        </div>
        <p
          style={{
            fontWeight: 100,
            fontSize: 10,
            color: "#D1D1D1",
            paddingTop: 10
          }}
        >
          {amountError}
        </p>
      </div>
      <div className='pt-4 w-100'>
        <ProductTabs reviews={reviews} description={description} />
      </div>
    </div>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Product);
