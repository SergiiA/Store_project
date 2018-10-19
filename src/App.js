import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "store/store";
import { Provider } from "react-redux";
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
          <div className="Catalog" style={{ display: "inline" }}>
            <Provider store={store}>
              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Catalog} />
                  <Route path="/order" component={Order} />
                  <Route path="/cart" component={Cart} />
                </Switch>
              </BrowserRouter>
            </Provider>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
