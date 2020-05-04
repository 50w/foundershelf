import React, { useState } from 'react';

import {getRecommendationByFounder} from '../../content/data';
import './Root.css'
import { Person } from '../../content/types';

export function Root() {
  const [selected, setSelected] = useState<Person | undefined>()
  const [detailsOpen, setDetailsOpen] = useState(false)

  const founderClickOpen = (selected: Person)  => {
    setSelected(selected)
    setDetailsOpen(true)
  };

  const founderClose = () => {
    setDetailsOpen(false)
  };

  const founders = getRecommendationByFounder()

  return (
    <div className="persons">
      {founderGrid(founders)}
    </div>
  );

  function founderGrid(founders: Person[]) {
    return <section>{founders.map(founder => founderSquare(founder))}</section>
  }

  function founderSquare({description, name, img}: Person) {
  return <aside><img height={150} alt={name} src={img}/><h3>{name}</h3><p>{description}</p></aside>
  }

}

export default Root;

