import React, { Component } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterURL from './components/RouterURL/RouterURL';
import Header from './components/Header/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header></Header><br/>
          <h2>React CRUD Tutorial</h2>
        </div>
        <RouterURL></RouterURL>
      </Router>

    )
  }
}

export default App;
