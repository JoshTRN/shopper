import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import API from '../../../Utils/API';
import Button from '@material-ui/core/Button';

const style = {
  paper: {
    padding: '50px',
    marginBottom: '10px',
    height: '500px',
    overflowY: 'auto'
  },
  text: {
    marginLeft: '100%'
  },
  strike: {
    textDecorationLine: 'line-through'
  },
  display: {
    display: 'block'
  }
};


class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: (this.props.user) ? this.props.user : null,
      lists: [],
      currentList: null,
      updatedLists: [],
      description: '',
    }
    this.selectList = this.props.selectList.bind(this);
  }

  componentDidMount() {
    this.loadInitData();
  }

  loadInitData = async () => {
    const userProf = {
      user: this.state.user.displayName,
      email: this.state.user.email,
      imgUrl: this.state.user.photoURL
    }

	const {data: user} = await API.getUser(userProf)
	const { data: lists } = await API.getAllLists(user._id)
	console.log(lists)
	
	this.setState({ lists, user, updatedLists: lists})
  }

  createList = async e => {
    e.preventDefault();

	if (!this.state.description) alert('please add description')
	
	const listData = {
		_userId: this.state.user._id,
		name: this.state.description
	}

	await API.saveList(listData)
	this.loadInitData();
    this.setState({ description: '' })
  }

  filterList = e => {
    const val = e.target.value;
    this.setState({
      description: val
    });

    const updatedLists = this.state.lists.filter(function (item) {
      return item.name.toLowerCase().search(
        val.toLowerCase()) !== -1;
    });
    this.setState({ updatedLists: updatedList });
  }

  deleteList = async id => {
    await API.deleteList(id)
	this.loadInitData();
  }

  render() {
    return (
      <Grid item xs={6} >
        <Paper style={style.paper}>
          <Typography style={{whiteSpace: 'normal'}} variant="headline">Search or Create Shopping List by name</Typography>
          <br/>
          <form>
            <div className="form-group">
             <input
                placeholder="Search for..."
                value={this.state.description}
                ref={input => this.search = input}
                onChange={ this.filterList }
              /> 
            </div>
          </form>
            <Button onClick={this.createList} >Create List</Button>
            <List component="nav">
              { this.state.lists.length ?
                  (
                    <div>
                      {this.state.updatedLists.map(list => (
                        <div>
                          <Grid container >
                            <Grid item xs={11}>
                              <ListItem button onClick={() => this.selectList(list._id, list.name, list.storeId)}>
                                <ListItemText primary={list.name} />
                              </ListItem>
                            </Grid>
                            <Grid item xs={1}>
                              <IconButton aria-label="Delete" style={style.button} onClick={() => this.deleteList(list._id)}>
                                <DeleteIcon />
                              </IconButton>
                            </Grid>
                            <Divider />
                          </Grid>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <Paper>
                        <Typography>
                        You have not created any shopping Lists.
                        </Typography>
                        </Paper>
                    </div>
                  )}
            </List>
        </Paper>
      </Grid>
        )
      }
    }
    
export default Lists;