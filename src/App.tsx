import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Root } from "./routes";
import "./App.css";
import "./mvp.css";

function App() {
  const contributors = [
    { name: "Nick", url: "https://www.github.com/nicklewanowicz" },
    { name: "Connor", url: "https://www.github.com/foopert" },
    { name: "50w", url: "https://www.github.com/50w" },
  ];
  return (
    <div >
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
          <aside style={{ width: "auto" }}>
            <h2>What is Founder Shelfspace?</h2>
            <div style={{ flexDirection: "row" }}>
              <img height={100} src="reading.svg" />
              <p>
                What does the bookshelf of the worlds most successful founders,
                entrepreneurs, and investors look like? Get context on how they
                think and browse the growing library of books they recommend.
              </p>
            </div>
          </aside>
        </section>
      </header>
      <hr />
      <div className="App">
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </div>
      <section style={{ padding: "2rem" }}>
        {renderContributors(contributors)}
      </section>
    </div>
  );

  function renderContributors(contributors: { name: string; url: string }[]) {
    return (
      <p>
        Made with ❤️ by
        {contributors.map(({ name, url }, i) => {
          const delimiter =
            i === 0 ? " " : i < contributors.length - 1 ? ", " : ", and ";
          return (
            <>
              {delimiter}
              <a target="_blank" href={url}>
                {name}
              </a>
            </>
          );
        })}
      </p>
    );
  }
}

export default App;
