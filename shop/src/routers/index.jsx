import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Hs, Cart, My, Reg, Classify } from './assembly'
import '@/styles/reset.css'

export default class Routers extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/classify" component={Classify}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/my" component={My}/>
        <Route path="/login" component={Login}/>
        <Route path="/reg" component={Reg}/>
        <Route path="/" component={Hs}/>
      </Switch>
     </BrowserRouter>
    )
  }
}

