import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import {Person} from '../../../../content/types'
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
            fullScreen={matches ? false : true} 
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >       
            <div className='founder-content'>
                <IconButton style={{position: 'absolute', zIndex:2}} color="inherit" onClick={handleClose} aria-label="Close">
                    <CloseIcon />
                </IconButton>
                <div className='founder-card'>
                    <div className='founder-header'>
                        <Card raised style={{padding: '0.5rem 1rem 0.5rem 1rem', textAlign: 'left', display: 'flex', flexDirection: 'row'}}>
                            <img width={matches ? 200 : 100} height={matches ? 200 : 100} style={{margin: 'auto 1rem auto auto', borderRadius:'100%', objectFit: 'cover', border: '2px solid #021a40', boxShadow: '0px 8px 60px -10px rgba(13, 28, 39, 0.8)'}} src={person.img} />
                            <div>
                                <h2 style={{marginBottom: 0}}>{person.name}</h2>
                                <h5 style={{margin: 0, color: '#424242'}}>{person.company}</h5>
                                <p>
                                    {person.description}
                                </p>
                            </div>
                        </Card>
                    </div> 
                </div>
                <BookGridList books={person.books}/>
            </div>
        </Dialog>
    ): null;
}

export default FullScreenDialog;