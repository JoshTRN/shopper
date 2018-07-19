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
import Autocomplete from 'react-google-autocomplete';
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

  loadInitData = () => {
    let userProf = {
      user: this.state.user.displayName,
      email: this.state.user.email,
      imgUrl: this.state.user.photoURL
    }

    API.getUser(userProf)
      .then(res => {
        this.setState({ user: res.data });
        API.getList(res.data._id)
          .then(res => {
            this.setState({ lists: res.data });
            this.setState({ updatedLists: res.data });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  createList = (form) => {
    form.preventDefault();

    if (this.state.description !== '') {

      let listData = {
        _userId: this.state.user._id,
        name: this.state.description
      }

      API.saveList(listData)
        .then(res => {
          this.loadInitData();
        })
    } else {
      alert('please add description')
    }
    this.setState({ description: '' })
  }

  filterList = (event) => {
    const val = event.target.value;
    this.setState({
      description: val
    });

    var updatedList = this.state.lists;

    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(
        val.toLowerCase()) !== -1;
    });
    this.setState({ updatedLists: updatedList });
  }

  deleteList = (id) => {
    API.deleteList(id)
      .then(res => {
        this.loadInitData();
      })
  }

  render() {

    return (
      <Grid item xs={6} >
        <Paper style={style.paper}>
          <Typography variant="headline">Search or Create Shopping List by name</Typography>
          <br/>
          <form>
            {/* <Autocomplete
              style={{ width: '90%' }}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={['establishment']}
            /> */}
            <div className="form-group">
             <input
                placeholder="Search for..."
                value={this.state.description}
                ref={input => this.search = input}
                onChange={
                  this.filterList
                }
              /> 
             
            </div>
              
             
          </form>
            <Button onClick={this.createList} >Create List</Button>
            <List component="nav">

              {
                this.state.lists.length ?
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
                  )
                  :
                  (
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