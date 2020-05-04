import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Root } from "./routes";
import "./App.css";
import "./mvp.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <nav>
            <h1>FounderShelf</h1>
            <ul>
              <li>
                <a
                  href="https://www.github.com/nicklewanowicz/founder-shelfspace"
                  target="_blank"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </nav>
          <section>
            <aside style={{width: 'auto'}}>
                <h2>What is Founder Shelfspace?</h2>
                <div style={{flexDirection: 'row'}}>

                <img height={100} src="reading.svg"/>
                <p>
                  What does the bookshelf of the worlds most successful
                  founders, entrepreneurs, and investors look like? Get context
                  on how they think and browse the growing library of books they
                  recommend.
                </p>
              </div>
            </aside>
          </section>
        </header>
        <hr/>
        <div className="App">
          <Router>
            <Route path="/" component={Root} />
          </Router>
        </div>
        <div
          className=""
          style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}
        >
          Made with ❤️ by{" "}
          <a target="_blank" href="https://www.github.com/nicklewanowicz">
            Nick
          </a>{" "}
          and{" "}
          <a target="_blank" href="https://www.github.com/foopert">
            Connor
          </a>
        </div>
      </div>
    );
  }
}

export default App;
