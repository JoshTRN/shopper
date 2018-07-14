import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import BottomNav from './Layouts/BottomNav'
//import Excercises from './Excercises';
//import Login from './Login'
import firebase, { auth, provider } from '../firebase/firebase'
import Sidebar from './Layouts/Sidebar'
import MainButtons from './profile/mainButtons'
//import ProfileCard from './profile/profileCard';
//import ProfileCard from './profile/profileCard';
//import VerticalLinearStepper from './profile/stepper';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Instructions from './Excercises/Dialogs/Instructions';



//const login = true;

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
      //document.body.style.backgroundColor = "gainsboro";
      return (
        <Fragment>
        {this.state.user ? 
          
          <Sidebar logout={this.logout} user={this.state.user}/>
        : <div><Header 
                login={this.login}
                user={this.state.user}
                />
                <Grid container spacing={24} style={{paddingTop: "25px"}}>
                  <Grid item xs={12}>
                    <Paper style={{paddingTop: "20px", paddingBottom: "20px", textAlign: 'center'}}>  
                      <Typography variant="display1" align="center" style={{color: "black"}}>
                        Welcome to Shopper, home for the orginized shopper!
                      </Typography>
                      <Instructions/>
                    </Paper>
                  </Grid>
                </Grid>
                <Grid container spacing={24} style={{paddingTop: "25px", paddingBottom: "30px"}}>
                    <MainButtons/>
                </Grid>
                
        </div> 
      }
          <BottomNav/>
          <Footer />
        </Fragment>
      )
    }
}