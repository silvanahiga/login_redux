import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux"


class App extends React.Component {



  render() {


    return (
      <div className="App">
        <Router>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />

        </Router>
      </div>
    );
  }
}

export default App;
