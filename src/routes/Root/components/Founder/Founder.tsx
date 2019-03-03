import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import {Person} from '../../../../types'
import {BookGridList} from '../'
import './Founder.css'
function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}


interface Props {
    handleClose(): void;
    person: Person | null;
    open: boolean;
}

const FullScreenDialog: React.SFC<any> = (props:Props) => {
    const matches = useMediaQuery('(min-width:768px)');
    const { handleClose, open, person } = props;
    return person ? (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
          style={{maxWidth: '1000px', maxHeight: matches ? 1000 : '100%', margin: 'auto'}}
        >       
            <div className='founder-content'>
                <div className='founder-card'>
                    <h2 className='founder-header'>
                        {person.name}
                    </h2> 
                    <div className='element'/>

                    <img width='40%' src={person.img} />
                </div>
                <BookGridList books={person.books}/>
            </div>
        </Dialog>
      </div>
    ): null;
}

export default withStyles({
    flex: {
      flex: 1,
    },
  })(FullScreenDialog);