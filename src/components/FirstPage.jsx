import React from "react";
import SectionItem from "./SectionItem";
import { connect } from "react-redux";
import ViewedProducts from "./ViewedProducts";
const FirstPage = ({
  fetchDataReducer: { products },
  cartReducer: { viewedProducts }
}) => {
  const man = products.filter(({ category }) => category === "man");
  const women = products.filter(({ category }) => category === "women");
  const kids = products.filter(({ category }) => category === "kids");

  return (
    <>
      <SectionItem interval={3000} products={man} />
      <ViewedProducts viewed={viewedProducts} />
      <SectionItem interval={5000} products={kids} />
      <SectionItem interval={5000} products={women} />
    </>
  );
};
const mapStateToProps = ({ fetchDataReducer, cartReducer }) => ({
  fetchDataReducer,
  cartReducer
});

export default connect(mapStateToProps)(FirstPage);
