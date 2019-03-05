import React, { Component } from 'react';

import {AdvancedGridList, Founder} from './components'
import shelf from '../../content/shelf';
import './Root.css'
import { Person } from '../../content/types';

interface Props {
}

interface State {
  selected: Person | null;
  detailsOpen: boolean;
}

class Root extends Component<any, State> {
  state: State = {
    detailsOpen: false,
    selected: null,
  }

  founderClickOpen = (selected: Person) => {
    this.setState({ selected, detailsOpen: true });
  };

  founderClose = () => {
    this.setState({ detailsOpen: false });
  };

  render() {
    const {selected, detailsOpen} = this.state;
    return (
      <div className="persons">
        <Founder handleClose={this.founderClose} person={selected} open={detailsOpen}/>
        <AdvancedGridList selectPerson={this.founderClickOpen} people={shelf.people}/>
      </div>
    );
  }
}

export default Root;
