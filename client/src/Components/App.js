import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import BottomNav from './Layouts/BottomNav'
import Excercises from './Excercises';
import Login from './Login'
import firebase, { auth, provider } from '../firebase/firebase'


const login = true;

export default class extends Component { 

  constructor() {
    super();
    this.state = {
      user: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user
        })
      }
    })
  }

  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user
        })
      })
  }

    render(){
      return (
        <Fragment>
          <Header logout={this.logout}
                login={this.login}
                user={this.state.user}
        />
        {this.state.user ? 
        <Excercises />
        : 
        <Login login={this.login}/>
      }
          <BottomNav/>
          <Footer />
        </Fragment>
      )
    }
}