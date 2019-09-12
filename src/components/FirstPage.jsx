import React from "react";
import CarouselItems from "./CarouselItems";
import Products from "./products";
import { connect } from "react-redux";
const FirstPage = ({ fetchDataReducer: { products } }) => {
  const man = products.filter(({ category }) => category === "man");
  const women = products.filter(({ category }) => category === "women");
  const kids = products.filter(({ category }) => category === "kids");

  return (
    <>
      <CarouselItems interval={3000} products={man} />
      <Products products={man} />
      <CarouselItems interval={5000} products={kids} />
      <Products products={kids} />
      <CarouselItems interval={5000} products={women} />
      <Products products={women} />
    </>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(mapStateToProps)(FirstPage);
