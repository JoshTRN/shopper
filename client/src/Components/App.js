import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './Excercises';
import Login from './Pages/Login'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import firebase, { auth, provider } from '../firebase/firebase'




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
    render()
    {
      return (
        
      <div>
        <Header logout={this.logout}
                login={this.login}
                user={this.state.user}
        />
        {this.state.user ? 
        <Excercises />
        : 
        <Login login={this.login}/>
      }
      <Footer />
      </div>
      )
    }
}