import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Lists from './Views/listView';
import ProfileCard from '../profile/profileCard';
import Items from './Views/itemView';

class Main extends Component {

  constructor(props) {
    super(props);

    
    this.state = {
      user: (this.props.user) ? this.props.user : null,
      lists: [],
      items: [],
      currentList: null,
      itemChecked: {},
      updatedLists: [],
      description: '',
      listSelected: false,
    }
  }

  componentDidMount() {
    this.loadInitData();
  }

  loadInitData = () => {

    let userProf = {
      name: this.state.user.displayName,
      email: this.state.user.email,
      imgUrl: this.state.user.photoURL
    }
    this.setState({user: userProf})
  }

  selectList = (id, name) => {
    this.setState({ currentList:{ id: id, name: name } });
    // this.loadItemsForList(id);
  }

  resetLists = () => {
    this.setState({currentList: null });
  }

  render() {

    let view = this.state.currentList ? 
      <Items 
        user={this.state.user}
        back={this.resetLists}
        list={this.state.currentList}
      /> 
      : 
      <Lists 
      user={this.state.user} 
      selectList={this.selectList}
      />

    return (
      <Grid
        container
        spacing={40}
        justify='space-around'
      >
        {view}
        
        <Grid container item xs={2} justify='flex-end'>
          <ProfileCard
            style={{ position: "fixed" }}
            photoURL={this.state.user.imgUrl}
            userName={this.state.user.name}
          />
        </Grid>
      </Grid>
    );
  }
}


export default Main;