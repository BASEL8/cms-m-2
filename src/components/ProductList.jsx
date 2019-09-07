import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({
  product: { images, name, price, description, availability, _id }
}) => {
  const [showImages, setShowImages] = useState(false);
  const [mainImage, setMainImage] = useState(
    `http://localhost:9090${images[0].path}`
  );
  return (
    <div className=' col-2 m-2 d-flex p-2 border rounded'>
      <div className='p-1 m-1 flex-grow-1  d-flex flex-column product'>
        <div
          className='flex-grow-1 flex-nowrap d-flex position-relative'
          onMouseEnter={() => setShowImages(true)}
          onMouseLeave={() => setShowImages(false)}
        >
          <div className='flex-grow-1  product_image '>
            <img src={mainImage} alt={name} className='h-100 ' />
          </div>

          {showImages && (
            <div className='p-1 d-flex flex-column position-absolute'>
              {images.map((image, index) => (
                <div
                  key={index}
                  className='p-1 mb-1 sideImage'
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
          )}
        </div>
        <div>
          <Link to={`/product/${_id}`}>{name}</Link>
          <div>{price}</div>
          <div>{description}</div>
          <div>{availability}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductList;
