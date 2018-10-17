import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/controls/Button/Button.jsx";
import OkButton from "./components/controls/Button/OkButton.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div>
          <Button text="Name" />
          <OkButton />
        </div>
      </div>
    );
  }
}

export default App;
