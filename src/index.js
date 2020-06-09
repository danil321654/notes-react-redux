import React, {useState} from "react";
import {Provider, connect} from "react-redux";
import ReactDOM from "react-dom";
import {Container} from "./App.js";
import {BrowserRouter} from "react-router-dom";
import {store} from "./store.js";
import "./App.css";

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);
console.log(store.getState());
