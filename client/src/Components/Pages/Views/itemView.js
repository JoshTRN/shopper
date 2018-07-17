
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
import Checkbox from '@material-ui/core/Checkbox';
import API from '../../../Utils/API';

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

class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: (this.props.user) ? this.props.user : null,
      items: [],
      itemChecked: {},
      updatedList: [],
      description: '',
      list: this.props.list,
    }
    this.back = this.props.back.bind(this);
  }

componentDidMount() {
    this.loadItems(this.state.list.id);
  }

  loadItems = (id) => {
    API.getAllItemsForList(id)
      .then(res => {
          this.setState({ items: res.data })
          API.getAllItemsForList(id)
          .then(res => {
            this.setState({ items:res.data })
            this.setState({ updatedList: res.data })
          })
      })
  }


  filterItems = (event) => {

    const val = event.target.value;
    this.setState({
      description: val
    });

    var updatedList = this.state.items;

    updatedList = updatedList.filter(function (item) {
      return item.name.toLowerCase().search(
        val.toLowerCase()) !== -1;
    });
    this.setState({ updatedList: updatedList });
  }

  createItem = (item) => {
    item.preventDefault();

    let itemData = {
      _listId: this.state.list.id,
      name: this.state.description,
      isleNum: ""
    };

    API.createItem(itemData)
      .then(res => {
        this.loadItems(res.data._listId);
        this.setState({ description: '' })
      });
  }

  deleteItem = (id) => {
    API.deleteItem(id)
      .then(res => {
        console.log(res);
        this.loadItems(this.state.list.id)
      })
  }

  handleToggle = (id, e) => {
    let itemChecked = this.state.itemChecked;
    itemChecked[id] = e.target.checked;
    this.setState({
      itemChecked
    });
  }

  render() {
    return (

      <Grid item xs={6} >
        <Paper style={style.paper}>
          <Typography variant="headline">{this.state.list.name}</Typography>
          <form>
            <input
              placeholder="Search for..."
              value={this.state.description}
              ref={input => this.search = input}
              onChange={this.filterItems}
            />
            <button onClick={this.createItem} >Add Item</button>
          </form>
          <List component="nav">
            <div>
              {this.state.items.length ? (
                <div>
                  {this.state.updatedList.map(item => (
                    <div>
                      <Grid container >
                        <Grid item xs={11}>
                          <ListItem button style={{padding: "0px"}}>
                            <Checkbox 
                              onChange={(e) => this.handleToggle(item._id, e)}
                              key={item._id}
                            />
                            <ListItemText primary={item.name} style={(this.state.itemChecked[item._id]) ? style.strike : style.display} />
                          </ListItem>
                        </Grid>
                        <Grid container alignItems="center" item xs={1}>
                          <IconButton aria-label="Delete" style={style.button} onClick={() => this.deleteItem(item._id)}>
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
                    <br />
                    <Paper>
                      <Typography variant="body2" align="center">Your shopping cart is empty, please select a list
                  </Typography>
                    </Paper>
                  </div>)
              }
            </div>
          </List>

        </Paper>
        <button onClick={this.back} > {"<"}-- Back</button>
      </Grid>
    )
  }
}

export default Items;