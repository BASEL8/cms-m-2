import React from "react";
import NewItems from "./NewItems";
import Products from "./products";
const FirstPage = ({ products }) => {
  return (
    <>
      <NewItems />
      <Products products={products} />
    </>
  );
};
export default FirstPage;
