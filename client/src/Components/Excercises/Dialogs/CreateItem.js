import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const style = {
  button: {
    marginLeft: '100%'
  }
};

export default class extends Component {
  state = {
    open: false,
    form: {
      description: ''
    }
  }
  handleChange = name => ({ target: { value } }) => {
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleToggele = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { open, form: { description } } = this.state;

    return (
      <Fragment>
        <IconButton onClick={this.handleToggele} aria-label="Delete" style={style.button}>
          <AddIcon />
        </IconButton>
        <Dialog
          open={open}
          onClose={this.handleToggele}
        >
          <DialogTitle id="form-dialog-title">
            Create a new Item on List1
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <form>
              <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}