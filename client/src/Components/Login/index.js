import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const style = {
  paper: {
    padding: '50px',
    marginTop: '10px',
    marginBottom: '10px',
    height: '250px',
    overflowY: 'auto'
  }
}
export default props => (
  <Fragment>
    <Paper style={style.paper}>
      <Button variant="contained" size="large" color="primary">
        Login
      </Button>
    </Paper>
  </Fragment>
)