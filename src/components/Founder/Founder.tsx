import React, { useState } from "react";

import { Person } from "../../content/types";

interface Props {
  founder: Person;
  unselect(): void;
}

export function Founder({
  founder: { books, name, img, company, description },
  unselect, 
}: Props) {
  return (
    <main>
      <aside style={{ width: "100%" }}>
        <nav>
          <img
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "10%",
            }}
            alt={name}
            src={img}
          />
          <button onClick={unselect}>x</button>
        </nav>
        <h2>{name}</h2>
        <h3>🏢{company}</h3>
        <p>{`${description}`}</p>
      </aside>
      <hr/>

      <h1>Recommends:</h1>
      <section>
        <hr />
        {renderBookGrid(books)}
      </section>
    </main>
  );

  function renderBookGrid(books: Person["books"]) {
    return (
      books &&
      books.map(({ author, img, title }) => {
        return (
          <aside key={title}>
            <img
              style={{
                height: "250px",
                width: "150px",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "10%",
              }}
              alt={title}
              src={img}
            />
            <h3>✍️{author}</h3>

            <h2>{title}</h2>
          </aside>
        );
      })
    );
  }
}
