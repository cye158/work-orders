import React, { Component } from "react";
import Orders from "./components/orders";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Orders />
        </main>
      </div>
    );
  }
}

export default App;
