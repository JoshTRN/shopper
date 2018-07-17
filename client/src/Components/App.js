import React, { Component } from 'react';
import { auth, provider } from '../firebase/firebase'
import Sidebar from './Layouts/Sidebar'
import Login from './Pages/login'

export default class extends Component {

  constructor(props) {
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem('user'))
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
      localStorage.removeItem('user');
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user: user
        })
        localStorage.setItem('user', JSON.stringify(user));
      });
      
  }


  render() {

    const user = this.state.user 
    let page;

    user ? 
    
    page = <Sidebar logout={this.logout} user={this.state.user} />
    :
    page = <Login login={this.login} user={this.user} />

    return (
      <div>
        {page}
      </div>
    )
  }
}