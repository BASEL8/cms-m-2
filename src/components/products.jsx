import React from "react";
import ProductList from "./ProductList";
const ProductsList = ({ products }) => {
  return (
    <div className='row w-100 pt-2 d-flex flex-wrap'>
      {products.map(product => (
        <ProductList product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsList;
