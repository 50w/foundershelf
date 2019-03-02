import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

// TileList -------------------------------------
function AdvancedGridList(props:any) {
    const { classes } = props;
    const matches = useMediaQuery('(min-width:768px)');

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} cols={matches ? 3 : 2} className={classes.gridList}>
          {shelf.people.map(person => (
            <GridListTile key={person.img} cols={1} rows={matches ? 2 : 1}>
              <img src={person.img} alt={person.name} />
              <GridListTileBar
                title={person.name}
                titlePosition="bottom"
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <StarBorderIcon />
                //   </IconButton>
                // }
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
  
const MyTileList = withStyles({
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

import shelf from '../../shelf';
import './Root.css'
class Root extends Component {
  render() {
    console.log(shelf)
    return (
      <div className="persons">
        <Card raised style={{margin: '4rem 0.25rem 1rem 0.25rem', padding: '0.5rem 1rem 0.5rem 1rem', textAlign: 'left'}}>
            <div>
                <h2>What is Founder Shelfspace?</h2>
                <p>
                    What does the booksehlf of the worlds most successful founders, entrepreuners, and investors look like? Get context on how they think and browse the growing library of books they recommend...
                </p>
            </div>
        </Card>
        <MyTileList/>
      </div>
    );
  }
}

export default Root;
