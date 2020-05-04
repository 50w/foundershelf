import React, { useState } from "react";

import { Person } from "../../content/types";

interface Props {
  founders: Person[],
  selectFounder(founder: Person): void,
}

export function Grid({founders, selectFounder}: Props) {

  return founderGrid(founders);

  function founderGrid(founders: Person[]) {
    return (
      <section>{founders.map((founder) => founderSquare(founder))}</section>
    );
  }

  function founderSquare(founder: Person) {
    const { books, company, description, name, img } = founder
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
      <aside key={name} onClick={() => selectFounder(founder)}>
        <img
          style={{
            height: "150px",
            width: "150px",
            objectFit: "cover",
            objectPosition: "top",
            borderRadius: '10%',
          }}
          alt={name}
          src={img}
        />
        <h2>{name}</h2>
        <h3>🏢{company}</h3>
        <p>{`${description.substring(0, 50)}...`}</p>
      </aside>
    );
  }
}