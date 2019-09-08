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
    <div className='col-md-3 col-xs-6 m-1 d-flex p-1'>
      <Link to={`/product/${_id}`}>
        <div className='p-1 m-1 d-flex flex-column product h-100'>
          <div
            className='flex-nowrap d-flex position-relative'
            onMouseEnter={() => setShowImages(true)}
            onMouseLeave={() => setShowImages(false)}
          >
            <div className='flex-grow-1  product_image '>
              <img src={mainImage} alt={name} className='w-100 ' />
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
            <div className='cartItemListPrice'>{price} kr</div>
            <div className='cartItemListName'>{name}</div>
            <div className='cartItemListAvailability'>
              {availability} items left
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductList;
