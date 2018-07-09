import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateDialog from './Dialogs/CreateList';
import Checkbox from '@material-ui/core/Checkbox';
import CreateItem from './Dialogs/CreateItem';

const style = {
  paper: {
    padding: '50px',
    marginTop: '10px',
    marginBottom: '10px',
    height: '500px',
    overflowY: 'auto'
  },
  button: {
    marginLeft: '100%'
  },
  text: {
    marginLeft: '100%'
  }
};


export default props => (
      <Grid container spacing="16">
          <Grid item sm>
              <Paper style={style.paper}>
                  <Typography variant="headline" align="right"> Add a Shopping List</Typography>
                  <CreateDialog/>
                  <List component="nav">
                    <ListItem button>
                      <ListItemText primary="List1" />
                        <ListItemSecondaryAction>
                          <CreateItem />
                        </ListItemSecondaryAction>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" style={style.button}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary="List2" />
                      <ListItemSecondaryAction>
                        <CreateItem />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="List3" />
                      <ListItemSecondaryAction>
                        <CreateItem />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText primary="List4" />
                      <ListItemSecondaryAction>
                        <CreateItem />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
              </Paper>
          </Grid>
          <Grid item sm>
              <Paper style={style.paper}>
                  <Typography variant="headline" align="right"> Items in "Lits1"</Typography>
                  <List component="nav">
                    <ListItem button>
                      <ListItemText primary="Item1" />
                      <ListItemSecondaryAction>
                        <Checkbox
                          // onChange={this.handleToggle(value)}
                          // checked={this.state.checked.indexOf(value) !== -1}
                        />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary="Item2" />
                      <ListItemSecondaryAction>
                        <Checkbox
                        // onChange={this.handleToggle(value)}
                        // checked={this.state.checked.indexOf(value) !== -1}
                        />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Item3" />
                      <ListItemSecondaryAction>
                        <Checkbox
                        // onChange={this.handleToggle(value)}
                        // checked={this.state.checked.indexOf(value) !== -1}
                        />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText primary="Item4" />
                      <ListItemSecondaryAction>
                        <Checkbox
                        // onChange={this.handleToggle(value)}
                        // checked={this.state.checked.indexOf(value) !== -1}
                        />
                      </ListItemSecondaryAction>
                      <ListItemSecondaryAction>
                        <IconButton aria-label="Delete" style={style.button}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
              </Paper>
          </Grid>
      </Grid>
)
