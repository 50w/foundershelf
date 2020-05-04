import React, { useState } from 'react';

import {Founder, FounderGrid} from './components'
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
        {/* <Founder handleClose={founderClose} person={selected} open={detailsOpen}/> */}
        <FounderGrid founders={founders} />
      </div>
    );
}

export default Root;
