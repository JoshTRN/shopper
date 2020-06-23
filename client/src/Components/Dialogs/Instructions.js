import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ProfileCard from '../profile/stepper';

class AlertDialog extends React.Component {
  state = { open: false };

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open Instructions</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <ProfileCard />
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;