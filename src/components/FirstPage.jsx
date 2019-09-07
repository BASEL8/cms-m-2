import React, { useEffect } from "react";
import NewItems from "./NewItems";
import Products from "./products";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchData";
const FirstPage = ({ fetchData, fetchDataReducer: { products } }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <NewItems />
      <Products products={products} />
    </>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(
  mapStateToProps,
  { fetchData }
)(FirstPage);
