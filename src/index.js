import React, {useState} from "react";
import {Provider, connect} from "react-redux";
import ReactDOM from "react-dom";
import {Container} from "./App.js";
import {store} from "./store.js";

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);
