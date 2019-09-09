import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Product";
import Nav from "./Nav";
import FirstPage from "./FirstPage";
import Footer from "./footer";
import ShoppingCart from "./ShoppingCart";
const Main = () => {
  return (
    <div className='d-flex flex-column App-header pl-3 pr-3 pt-0'>
      <Router>
        <Nav />
        <Route path='/' exact component={props => <FirstPage {...props} />} />
        <Route
          path='/product/:id'
          exact
          component={props => <Product {...props} />}
        />
        <Route
          path='/shoppingCart'
          exact
          component={props => <ShoppingCart {...props} />}
        />
      </Router>
      <Footer />
    </div>
  );
};
export default Main;
