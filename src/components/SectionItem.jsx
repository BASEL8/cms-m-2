import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import Whirligig from "react-whirligig";
import LeftSVG from "./svg/left";
import RightSVG from "./svg/right";
const CarouselItems = ({ products, interval, category }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div className='flex-grow-1 w-100 mb-5 border-bottom  '>
      <div className='flex-grow-1 d-flex w-100 justify-content-center align-items-center w-100 CarouselHolder pb-2'>
        {products.length > 0 ? (
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            width='100%'
            autoPlay={false}
            interval={interval}
          >
            {products
              .filter(({ carousel }) => carousel)
              .map(({ name, _id, images }) => (
                <Link
                  to={`/product/${_id}`}
                  key={_id}
                  className='d-flex w-100 justify-content-center h-100 align-items-center'
                >
                  {shuffle([
                    <img
                      src={`http://localhost:9191${images[0].path}`}
                      alt={name}
                      style={{ height: "50vw", width: "auto", margin: 10 }}
                      key={Math.random()}
                    />,
                    <div className='flex-grow-1' key={Math.random()}>
                      <p>{name}</p>
                    </div>,
                    <img
                      src={`http://localhost:9191${images[1].path}`}
                      alt={name}
                      style={{ height: "30vw", width: "auto", margin: 10 }}
                      key={Math.random()}
                    />
                  ])}
                </Link>
              ))}
          </Carousel>
        ) : (
          <div className='flex-grow-1 h-100 d-flex justify-content-center align-items-center'>
            <div className='lds-roller'>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
              <div className='shadow'></div>
            </div>
          </div>
        )}
      </div>
      <div className='text-center p-3 font-weight-bolder text-uppercase'>
        {products[0] && products[0].category}
      </div>
      <div className='w-100 d-flex justify-content-end'>
        <div className='w-100 pt-1 d-flex justify-content-end pb-5'>
          <button onClick={prev} className='btn btn-sm'>
            <LeftSVG />
          </button>
          <Whirligig
            visibleSlides={3}
            gutter='10px'
            ref={_whirligigInstance => {
              whirligig = _whirligigInstance;
            }}
            className='pt-2 d-flex overflow-y-auto productsSlider w-md-75 w-100'
          >
            {shuffle(products).map(product => (
              <ProductList product={product} key={product._id} />
            ))}
          </Whirligig>
          <button onClick={next} className='btn btn-sm'>
            <RightSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItems;
