import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Root} from './routes';
import{AppBar} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      {/* <AppBar/> */}
      <div className="App">
        <Router>
          <Route path='/' component={Root}/>
        </Router>
      </div>
      <div className='' style={{textAlign: 'center', margin: '1rem 0 2rem 0'}}>
          Made with ❤️ by <a target='_blank' href='https://www.github.com/nicklewanowicz'>Nick</a> and <a target='_blank' href='https://www.github.com/foopert'>Connor</a> 
      </div>
      </>
    );
  }
}

export default App;
