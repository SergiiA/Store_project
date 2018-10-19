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
