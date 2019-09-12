import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
const CarouselItems = ({ products, interval, category }) => {
  const shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  return (
    <div className='flex-grow-1 d-flex w-100 justify-content-center align-items-center w-100 CarouselHolder'>
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
        <h1>SOON</h1>
      )}
    </div>
  );
};

export default CarouselItems;
