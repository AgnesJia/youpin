import React, { Component } from 'react';
import { Home } from 'pages/home'
import {DetailContainer} from 'pages/detail'
import {CartContainer} from 'pages/cart'
import { Route, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home"></Redirect>
        <Route path='/home' component={Home}/>
        <Route path="/detail/:gid" component={DetailContainer}/>
        <Route path="/cart" component={CartContainer}/>
      </Switch>
    )
  }
}

export default App;
