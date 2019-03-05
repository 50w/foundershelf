import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import {Book} from '../../../../content/types'

interface Props { 
  classes: any;
  books: Book[]; 
}

const BookGridList: React.SFC<any> = (props:Props) => {
    const { classes } = props;
    const matches = useMediaQuery('(min-width:768px)');

    return (
      <div className={classes.root}>
        <GridList cellHeight={matches ? 150 : 200} spacing={1} cols={3} className={classes.gridList}>
          {props.books.map((person:Book) => (
            <GridListTile key={person.img} cols={1} rows={matches ? 2 : 1}>
              <img src={person.img} alt={person.title} />
              <GridListTileBar
                title={person.title}
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
  
  BookGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles({
    root: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: '100%',
      overflowY: 'scroll',
      overflowX: 'hidden',
      margin: 'auto',
      maxHeight: 'calc(100VH-20rem)',
      paddingBottom: '1rem',
    },
    gridList: {
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
      // boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      //borderTopRightRadius: '25px'
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
      color: 'white',
    },
})(BookGridList);