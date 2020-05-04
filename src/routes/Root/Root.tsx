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
    return <p>{founders.map(founder => founderSquare(founder))}</p>
  }

  function founderSquare(founder: Person) {
    return <p>{founder.name}</p>
  }

}

export default Root;

