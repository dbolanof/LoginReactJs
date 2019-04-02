import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './components/login';
// import Login2 from "./components/login2";

class App extends Component {
  constructor() {
    super();
    this.state = {
      titulo: "Login"
    }
  }
  render() {
    return (
      <div class="init">
        <Login />
      </div>
    );
  }
}

export default App;


//<div className="App">
  //<header className="App-header">
    //<img src={logo} className="App-logo" alt="logo" />
    //<h1>Ingreso</h1>
  //</header>
  //<h4> Sólo para personal autorizado </h4>
  //<Login2 />
//</div>
// <img src={logo} className="App-logo" alt="logo" />