import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "react-google-autocomplete";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import API from "../../../Utils/API";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

const style = {
  paper: {
    padding: "50px",
    marginBottom: "10px",
    height: "500px",
    overflowY: "auto",
  },
  text: {
    marginLeft: "100%",
  },
  strike: {
    textDecorationLine: "line-through",
  },
  display: {
    display: "block",
  },
};

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user ? this.props.user : null,
      items: [],
      itemChecked: {},
      updatedList: [],
      description: "",
      list: this.props.list,
      listLocation: this.props.listLocation,
    };
    this.back = this.props.back.bind(this);
  }

  componentDidMount() {
    this.loadItems(this.state.list.id);
  }

  loadItems = async (id) => {
    const itemsQuery = await API.getAllItemsForList(id);
    this.setState({ items: itemsQuery.data, updatedList: itemsQuery.data });
  };

  filterItems = (event) => {
    const val = event.target.value;
    const items = this.state.items;
    const updatedList = items.filter(
      item => item.name.toLowerCase().search(val.toLowerCase()) !== -1
    );
    this.setState({ updatedList: updatedList, description: val });
  };

  createItem = async e => {
    e.preventDefault();

    const itemData = {
      _listId: this.state.list.id,
      name: this.state.description,
      isleNum: "",
    };

    const itemCreationResponse = await API.createItem(itemData);
    this.loadItems(itemCreationResponse.data._listId);
    this.setState({ description: "" });
  };

  deleteItem = async id => {
    await API.deleteItem(id);
    this.loadItems(this.state.list.id);
  };

  handleToggle = (id, e) => {
    const itemChecked = this.state.itemChecked;
    itemChecked[id] = e.target.checked;
    this.setState({ itemChecked });
  };

  updateList = async (id, listData) => {
    await API.updateList(id, listData)
	this.loadItems(this.state.list.id);
  }

  handlePlaceSelect(place) {
    const listLocation = `${place.name}, ${place.formatted_address}`;
    this.setState({ listLocation });
    this.updateList(this.state.list.id, { storeId: listLocation });
    this.loadItems(this.state.list.id);
  }

  handleEdit() {
    this.setState({ listLocation: null });
    this.updateList(this.state.list.id, { storeId: null });
    this.loadItems(this.state.list.id);
  }
  render() {
    let address = this.state.listLocation ? (
      <Grid container>
        <p>Shopping at: </p>
        <Grid item xs={11}>
          <p style={{ whiteSpace: "normal", width: "90%" }}>
            {this.state.listLocation}
          </p>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={() => { this.handleEdit() }}
          >
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    ) : (
      <Grid container>
        <p>Would you like to add a store to shopping list?</p>
        <Autocomplete
          id="search"
          label="Search field"
          type="search"
          margin="normal"
          style={{ width: "90%" }}
          placeholder="Search for store here"
          onPlaceSelected={(place) => this.handlePlaceSelect(place) }
          types={["establishment"]}
        />
      </Grid>
    );
    return (
      <Grid item md={6} xs={12}>
        <Paper style={style.paper}>
          <Typography variant="headline">{this.state.list.name}</Typography>
          <br />
          {address}
          <form>
            <TextField
              id="search"
              label="Search for Item"
              type="search"
              margin="normal"
              placeholder="Search for..."
              value={this.state.description}
              ref={(input) => (this.search = input)}
              onChange={this.filterItems}
            />
          </form>
          <Button onClick={this.createItem}>Add Item</Button>
          <List component="nav">
            <div>
              {this.state.items.length ? (
                <div>
                  <Paper style={style.paper}>
                    {this.state.updatedList.map(item => (
                      <div>
                        <Grid container>
                          <Grid item xs={11}>
                            <ListItem button style={{ padding: "0px" }}>
                              <Checkbox
                                onChange={(e) => this.handleToggle(item._id, e)}
                                key={item._id}
                              />
                              <ListItemText
                                primary={item.name}
                                style={
                                  this.state.itemChecked[item._id]
                                    ? style.strike
                                    : style.display
                                }
                              />
                            </ListItem>
                          </Grid>
                          <Grid container alignItems="center" item xs={1}>
                            <IconButton
                              aria-label="Delete"
                              style={style.button}
                              onClick={() => this.deleteItem(item._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Grid>
                          <Divider />
                        </Grid>
                      </div>
                    ))}
                  </Paper>
                </div>
              ) : (
                <div>
                  <br />
                  <Paper>
                    <Typography variant="body2" align="center">
                      Your shopping cart is empty, please select a list
                    </Typography>
                  </Paper>
                </div>
              )}
            </div>
            <Button color="primary" onClick={this.back}>
              {" "}
              {"<"}-- Back to lists
            </Button>
          </List>
        </Paper>
      </Grid>
    );
  }
}

Items.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Items;
