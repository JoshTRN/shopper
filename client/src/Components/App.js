import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import BottomNav from './Layouts/BottomNav'
import Excercises from './Excercises';
import Login from './Login'
import firebase, { auth, provider } from '../firebase/firebase'
import Sidebar from './Layouts/Sidebar'
import MainButtons from './profile/mainButtons'
import ProfileCard from './profile/profileCard';
import VerticalLinearStepper from './profile/stepper';



const login = true;

export default class extends Component { 

  constructor(props) {
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
        {this.state.user ? 
          
          <Sidebar logout={this.logout} user={this.state.user}/>
        : <div><Header 
                login={this.login}
                user={this.state.user}
                />
        <MainButtons/></div>
//                 <VerticalLinearStepper/>
        {/* <ProfileCard/><MainButtons/>*/}</div> 
      }
          <BottomNav/>
          <Footer />
        </Fragment>
      )
    }
}