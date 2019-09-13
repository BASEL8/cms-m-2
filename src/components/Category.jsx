import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import { fetchCategory } from "../actions/fetchData";
import ReactPaginate from "react-paginate";

const Category = ({
  fetchCategory,
  fetchDataReducer: { productsCategory },
  match: { params }
}) => {
  const [paginate, setPaginate] = useState({
    skip: 0,
    pageCount: 0
  });
  useEffect(() => {
    fetchCategory(params.category, paginate, setPaginate);
    /*eslint-disable */
  }, [fetchCategory, paginate.skip, params.category]);
  /*eslint-enable */

  return (
    <div className='flex-grow-1 w-100'>
      {paginate && (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"...."}
          breakClassName={"break-me"}
          pageCount={paginate.pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={data => {
            let selected = data.selected;
            let skip = Math.ceil(selected * 3);
            setPaginate({ ...paginate, skip });
          }}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
        />
      )}
      <div className='d-flex w-100 flex-wrap'>
        {productsCategory.map(product => (
          <ProductList product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = ({ fetchDataReducer }) => ({ fetchDataReducer });
export default connect(
  mapStateToProps,
  { fetchCategory }
)(Category);
