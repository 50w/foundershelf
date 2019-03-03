import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import {Person} from '../../../../types'
import {BookGridList} from '../'
import './Founder.css'
import { inherits } from 'util';
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
        <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            style={{maxWidth: '1000px', maxHeight: matches ? 1000 : '100%', margin: matches ? 'auto' : 0}}
        >       
            <img width={matches ? 200 : 100} height={matches ? 200 : 100} style={{margin: 'auto', borderRadius:'100%', objectFit: 'cover'}} src={person.img} />
            <div className='founder-content'>
                <div className='founder-card'>
                    <div className='founder-header'>
                        <h2 style={{margin: 'auto'}}>{person.name}</h2>
                    </div> 

                </div>
                <BookGridList books={person.books}/>
            </div>
        </Dialog>
    ): null;
}

export default withStyles({
    flex: {
      flex: 1,
    },
  })(FullScreenDialog);