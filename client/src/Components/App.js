import React, { Component, Fragment} from 'react';
import { Header, Footer } from './Layouts';
import Excercises from './Excercises';
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




export default class extends Component { 
    render()
    {
      return (
        
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Excercises} />
            <Route exact path='/login' component={Login} />
          </div>
        </Router>
      </div>
      )
    }
}