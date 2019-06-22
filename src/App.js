import React, { Component } from "react";
import Orders from "./components/orders";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="App container-fluid justify-content-center p-0">
        <Orders />
      </main>
    );
  }
}

export default App;
