import React from "react";
import {Provider, connect} from "react-redux";
import ReactDOM from "react-dom";
import {store} from "./store.js";
import {changeActiveTab} from "./actions/changeActiveTab.js";
import {SideBar} from './components/SideBar/sideBar.js';
import "./App.css";



function Header() {
  return <div id="header">header </div>;
}

function App(props) {
  console.log(props);
  return (
    <div id="wrapper">
      <SideBar activeTab={props.activeTab} />
      <Header />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab
  };
};

const mapDispatchToProps = {
  toggleActive: changeActiveTab
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);
