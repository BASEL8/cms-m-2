import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SingleReview from "./SingleReview";
import Rating from "react-rating";
import { connect } from "react-redux";
import { reviewProduct } from "../actions/fetchData";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  indicator: {
    backgroundColor: "white"
  }
}));

const ProductTabs = ({ reviews, description, reviewProduct, product }) => {
  const initialState = { name: "", content: "", rating: 1 };
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [formValues, setFormValues] = useState({
    content: "",
    name: "",
    rating: 1
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const SubmitReviewProduct = e => {
    e.preventDefault();
    console.log(reviews[0]);
    console.log(formValues);
    product = {
      ...product,
      reviews: [
        ...product.reviews,
        {
          value: {
            content: formValues.content,
            name: formValues.name,
            rating: formValues.rating
          }
        }
      ]
    };
    reviewProduct(product);
    setFormValues({ ...initialState });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { name, content, rating } = formValues;
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Description' {...a11yProps(0)} />
          <Tab label='Shipping' {...a11yProps(1)} />
          <Tab label='Reviews' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{ minHeight: 300 }}>
        <div
          className=''
          style={{ fontSize: 15 }}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ minHeight: 300 }}>
        <div className='pb-5 mb-5 d-flex'>
          <div>
            <svg
              focusable='false'
              viewBox='0 0 24 24'
              width='24px'
              height='24px'
              fill='currentColor'
              style={{ marginBottom: -0.15 }}
            >
              <path d='M9.857 18L4.5 12.952 6 11.538l3.857 3.635L18 7.5l1.5 1.413z'></path>
            </svg>
          </div>
          100 DAYS RETURN POLICY
        </div>
        <div className='d-flex '>
          <div className='d-flex mr-3'>
            <div>
              <svg
                height='1em'
                width='1em'
                focusable='false'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
                style={{ fontSize: 24 }}
              >
                <g>
                  <path d='M14 7v8H9.2a3 3 0 0 0-4.4 0H3v1.5h1a2.7 2.7 0 0 0 0 .5 3 3 0 0 0 6 0 2.7 2.7 0 0 0 0-.5h4a2.7 2.7 0 0 0 0 .5 3 3 0 0 0 6 0 2.7 2.7 0 0 0 0-.5h1V11c0-4-7-4-7-4zM7 18.5A1.5 1.5 0 1 1 8.5 17 1.5 1.5 0 0 1 7 18.5zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm2.5-3.5h-.3a3 3 0 0 0-2.2-1 3 3 0 0 0-1.5.4V8.6c1.7.2 4 .9 4 2.4z'></path>
                  <path d='M12.8 8A5.8 5.8 0 1 0 7 13.8 5.8 5.8 0 0 0 12.8 8zm-10 0A4.3 4.3 0 1 1 7 12.3 4.3 4.3 0 0 1 2.7 8z'></path>
                  <path d='M7.8 4.5H6.3v3.6L4 9.4l.8 1.2L7.7 9V4.5z'></path>
                </g>
              </svg>
            </div>{" "}
            FREE DELIVERY & RETURNS
          </div>
          <div className='d-flex'>
            <div>
              <svg
                height='1em'
                width='1em'
                focusable='false'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
                style={{ fontSize: 24 }}
              >
                <defs></defs>
                <g>
                  <path d='M3.8 14h8.4a.7.7 0 0 0 .8-.7V4.7a.7.7 0 0 0-.8-.7H3.8a.7.7 0 0 0-.8.7v8.6a.7.7 0 0 0 .8.7zm.7-8.5h7v7h-7z'></path>
                  <path d='M14 7v8H9.2a3 3 0 0 0-4.4 0H3v1.5h1a3 3 0 1 0 6 0h4a3 3 0 1 0 6 0h1V11c0-4-7-4-7-4zM7 18.5A1.5 1.5 0 1 1 8.5 17 1.5 1.5 0 0 1 7 18.5zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm2.5-3.5h-.3a3 3 0 0 0-3.7-.6V8.6c1.7.3 4 .9 4 2.4z'></path>
                </g>
              </svg>
            </div>{" "}
            Express delivery 7,90 $ available
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} style={{ minHeight: 300 }}>
        <div className='d-sm-flex h-100 justify-content-around  bg-white p-1'>
          <div className='p-1 col shadow-sm'>
            <p className='font-weight-lighter text-monospace text-muted'>
              write your review
            </p>
            <form onSubmit={SubmitReviewProduct}>
              <input
                name='name'
                placeholder='Name'
                type='text'
                className='p-1 border rounded w-100'
                onChange={handleInputChange}
                value={name}
              />
              <textarea
                name='content'
                className='p-1 border rounded w-100 mt-3'
                placeholder='Review'
                onChange={handleInputChange}
                value={content}
              />
              <div className='mt-3 mb-3'>
                <Rating
                  onChange={value =>
                    setFormValues({ ...formValues, rating: value })
                  }
                  initialRating={rating}
                  emptySymbol={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='15'
                      viewBox='0 0 24 24'
                      fill='#A3A3A3'
                      style={{ margin: 1 }}
                    >
                      <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z' />
                    </svg>
                  }
                  fullSymbol={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='15'
                      height='15'
                      viewBox='0 0 24 24'
                      fill='#FF4E00'
                      style={{ margin: 1 }}
                    >
                      <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.326 18.266l-4.326-2.314-4.326 2.313.863-4.829-3.537-3.399 4.86-.671 2.14-4.415 2.14 4.415 4.86.671-3.537 3.4.863 4.829z' />
                    </svg>
                  }
                />
              </div>
              <button className='btn border'>send</button>
            </form>
          </div>
          <div
            className='col overflow-auto p-0 ml-sm-3  mt-3 mt-md-0 justify-content-start align-items-start d-flex flex-column justify-content-start'
            style={{ maxHeight: 300 }}
          >
            {reviews ? (
              reviews.map(({ value }, i) => (
                <SingleReview key={i} value={value} />
              ))
            ) : (
              <div style={{ color: "#FF4E00" }}>
                This product has no reviews, do you want to write the first one?
              </div>
            )}
          </div>
        </div>
      </TabPanel>
    </div>
  );
};
const mapStateTpProps = ({ fetchDataReducer }) => ({ fetchDataReducer });

export default connect(
  mapStateTpProps,
  { reviewProduct }
)(ProductTabs);
