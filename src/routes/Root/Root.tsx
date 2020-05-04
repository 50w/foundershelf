import React, { useState } from "react";

import { getRecommendationByFounder } from "../../content/data";
import "./Root.css";
import { Person } from "../../content/types";

export function Root() {
  const [selected, setSelected] = useState<Person | undefined>();
  const [detailsOpen, setDetailsOpen] = useState(false);

  const founderClickOpen = (selected: Person) => {
    setSelected(selected);
    setDetailsOpen(true);
  };

  const founderClose = () => {
    setDetailsOpen(false);
  };

  const founders = getRecommendationByFounder();

  return <div className="persons">{founderGrid(founders)}</div>;

  function founderGrid(founders: Person[]) {
    return (
      <section>{founders.map((founder) => founderSquare(founder))}</section>
    );
  }

  function founderSquare({ books, company, description, name, img }: Person) {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
      <aside onClick={() => setOpen(!open)}>
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

export default Root;
