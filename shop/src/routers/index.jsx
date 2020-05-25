import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Login } from './assembly'

export default class Routers extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Redirect to="/login"/>
      </Switch>
     </BrowserRouter>
    )
  }
}
