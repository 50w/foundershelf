import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

import {Person} from '../../../../types'

function Transition(props: any) {
  return <Slide direction="up" {...props} />;
}


interface Props {
    handleClose(): void;
    person: Person | null;
    open: boolean;
}


class FullScreenDialog extends React.Component<Props, any> {

  render() {
    const { handleClose, open, person } = this.props;
    return person ? (
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
        {person.name}
        </Dialog>
      </div>
    ): null;
  }
}

export default withStyles({
    appBar: {
      position: 'relative',
    },
    flex: {
      flex: 1,
    },
  })(FullScreenDialog);