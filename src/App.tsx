import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import { BrowserRouter as Router, Route } from "react-router-dom";

import {Root} from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2 className='header'>
          FounderShelf.space
          <a style={{color: 'white'}} target='_blank' href='https://www.github.com/nicklewanowicz/founder-shelfspace'><i className="fab fa-github"></i></a>
        </h2>
        <div className='element'/>
        <div className="App">
        <Card raised style={{margin: '1rem 0.25rem 1rem 0.25rem', padding: '0.5rem 1rem 0.5rem 1rem', textAlign: 'left'}}>
            <div>
                <h2>What is Founder Shelfspace?</h2>
                <p>
                  What does the bookshelf of the worlds most successful founders, entrepreneurs, and investors look like? Get context on how they think and browse the growing library of books they recommend...
                </p>
            </div>
          </Card>
          <Router>
            <Route path='/' component={Root}/>
          </Router>
        </div>
        <div className='' style={{textAlign: 'center', margin: '1rem 0 2rem 0'}}>
            Made with ❤️ by <a target='_blank' href='https://www.github.com/nicklewanowicz'>Nick</a> and <a target='_blank' href='https://www.github.com/foopert'>Connor</a> 
        </div>
      </div>
    );
  }
}

export default App;
