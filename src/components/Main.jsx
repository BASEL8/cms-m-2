import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./Product";
import Nav from "./Nav";
import FirstPage from "./FirstPage";
import Footer from "./footer";

const Main = () => {
  return (
    <div className='d-flex flex-column App-header p-3'>
      <Router>
        <Nav />

        <Route path='/' exact component={props => <FirstPage {...props} />} />
        <Route
          path='/product/:id'
          exact
          component={props => <Product {...props} />}
        />
      </Router>
      <Footer />
    </div>
  );
};
export default Main;

/*
const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let isSubscribed = true;
    axios({
      method: "post",
      url:
        "http://localhost:9090/api/collections/get/products?token=9c31ae75f9b25dcb7950a9606518f3",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        populate: 1
      }
    }).then(({ data: { entries } }) => {
      isSubscribed && setProducts(entries);
    });
    return () => (isSubscribed = false);
  }, []);
  return (
    <div className='d-flex flex-column App-header p-3'>
      <Nav />
      <Router>
        <Route
          path='/'
          exact
          component={props => <FirstPage products={products} {...props} />}
        />
        <Route
          path='/product/:id'
          exact
          component={props => <Product products={products} {...props} />}
        />
      </Router>
      <Footer />
    </div>
  );
};
*/
