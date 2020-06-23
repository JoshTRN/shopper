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
      updatedLists: [],
      currentList: null,
      description: '',
    }
  }

  componentDidMount() {
    this.loadInitData();
  }

  loadInitData = () => {
    const user = {
      name: this.state.user.displayName,
      email: this.state.user.email,
      imgUrl: this.state.user.photoURL
    }
    this.setState({ user })
  }

  selectList = (id, name, storeId) => {
    this.setState({ currentList: { id, name, storeId } });
  }

  resetLists = () => {
    this.setState({ currentList: null });
  }

  render() {
	const view = this.state.currentList
		? <Items 
			user={this.state.user}
			back={this.resetLists}
			list={this.state.currentList}
			listLocation={this.state.currentList.storeId}
		/> 
		: <Lists
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
        <Grid container item md={2} xs={12}justify='flex-end'>
          <ProfileCard
            photoURL={this.state.user.imgUrl}
            userName={this.state.user.name}
          />
        </Grid>
      </Grid>
    );
  }
}


export default Main;