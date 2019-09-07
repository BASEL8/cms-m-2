import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "../src/reducers";

import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <Main />
    </Provider>
  );
}

export default App;
