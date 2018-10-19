import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Provider } from "react-redux";

import logo from "./logo.svg";
import "./App.css";
//import store from "./store/store";
import DefaultLayout from "./components/layouts/DefaultLayout";

import Catalog from "./components/pages/Catalog/Catalog";
import Order from "./components/pages/Order/Order";
import Cart from "./components/pages/Cart/Cart";

import Button from "./components/controls/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DefaultLayout name="layout name">
            <Catalog />
          </DefaultLayout>
          <div>
            <Button />
          </div>
          <div className="Catalog" style={{ display: "inline" }} />
        </header>
      </div>
    );
  }
}

export default App;
