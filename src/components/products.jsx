import React from "react";
import ProductList from "./ProductList";
const ProductsList = ({ products }) => {
  return (
    <div className='row flex-grow-1 w-100 p-5 d-flex flex-wrap'>
      {products.map(product => (
        <ProductList product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsList;
