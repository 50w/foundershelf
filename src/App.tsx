import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Root} from './routes';
import{AppBar} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <AppBar/>
      <div className="App">
        <Router>
          <Route path='/' component={Root}/>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
