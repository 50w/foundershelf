import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import {Person} from '../../../../content/types'

interface Props { 
  classes: any;
  selectPerson(selected: Person): void;
  people: Person[]; 
}

const AdvancedGridList: React.SFC<any> = (props:Props) => {
    const { classes, selectPerson } = props;
    const matches = useMediaQuery('(min-width:768px)');

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} cols={matches ? 3 : 2} className={classes.gridList}>
          {props.people.map((person:Person) => (
            <GridListTile onClick={()=> selectPerson(person)} key={person.img} cols={1} rows={matches ? 2 : 1}>
              <img src={person.img} alt={person.name} />
              <GridListTileBar
                title={person.name}
                titlePosition="bottom"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
  
  AdvancedGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      maxHeight: 'calc(100VH-20rem)',
      paddingBottom: '1rem',
    },
    gridList: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',

    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
})(AdvancedGridList);