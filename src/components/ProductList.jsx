import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = ({
  product: { images, name, price, Rating, availability, _id }
}) => {
  const [showImages, setShowImages] = useState(false);
  const [mainImage, setMainImage] = useState(
    `http://localhost:9191${images[0].path}`
  );
  return (
    <div className='col-6 col-sm-4 d-flex p-1'>
      <Link
        to={`/product/${_id}`}
        className='d-flex justify-content-center w-100'
      >
        <div className='p-1 m-1 d-flex flex-column product h-100'>
          <div
            className='flex-nowrap d-flex position-relative'
            onMouseEnter={() => setShowImages(true)}
            onMouseLeave={() => setShowImages(false)}
          >
            <div className='flex-grow-1  product_image '>
              <img src={mainImage} alt={name} />
            </div>

            {showImages && (
              <div className='p-1 d-flex flex-column position-absolute'>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className='p-1 mb-1 sideImage'
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
            )}
          </div>
          <div>
            <div className='cartItemListPrice'>{price} kr</div>
            <div className='cartItemListName'>{name}</div>
            <div className='cartItemListAvailability'>
              {availability} items left
            </div>
            <div>
              {Array(Rating)
                .fill("")
                .map((i, index) => (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='15'
                    height='15'
                    viewBox='0 0 24 24'
                    fill='gold'
                    style={{ margin: 1 }}
                    key={index}
                  >
                    <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z' />
                  </svg>
                ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductList;
