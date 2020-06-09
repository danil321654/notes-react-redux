import React from "react";
import {Provider, connect} from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {store} from "./store.js";
import {changeActiveTab} from "./actions/changeActiveTab.js";
import {addNote} from "./actions/addNote.js";
import {SideBar} from "./components/SideBar/sideBar.js";
import {NotesPage} from "./components/NotesPage/NotesPage.js";
import {FriendsPage} from "./components/FriendsPage/FriendsPage.js";
import "./App.css";

function Header() {
  return <div className="header">header </div>;
}

function Footer() {
  return <div className="footer">footer </div>;
}
function App(props) {
  console.log("props", props);
  return (
    <BrowserRouter>
      <div className="wrapper">
        <SideBar activeTab={props.activeTab} />
        <div className="main-wrapper">
          <Switch>
            <Route path="/notes" render={() => NotesPage(props.notes)} />
            <Route path="/friends" render={() => FriendsPage()} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    activeTab: state.sidebarReducer.activeTab,
    notes: state.notesReducer.notes
  };
};

const mapDispatchToProps = {
  toggleActive: changeActiveTab,
  addNote: addNote
};

export const Container = connect(mapStateToProps, mapDispatchToProps)(App);
