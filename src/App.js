import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Catalog from "./components/pages/Catalog/Catalog";
import Button from "./components/controls/Button/Button";
import OkButton from "./components/controls/Button/OkButton";

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
            <OkButton />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
