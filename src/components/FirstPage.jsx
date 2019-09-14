import React from "react";
import SectionItem from "./SectionItem";
import { connect } from "react-redux";
const FirstPage = ({ fetchDataReducer: { products } }) => {
  const man = products.filter(({ category }) => category === "man");
  const women = products.filter(({ category }) => category === "women");
  const kids = products.filter(({ category }) => category === "kids");

  return (
    <>
      <SectionItem interval={3000} products={man} />
      <SectionItem interval={5000} products={kids} />
      <SectionItem interval={5000} products={women} />
    </>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(mapStateToProps)(FirstPage);
