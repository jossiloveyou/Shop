import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { Home,Classify } from '@/routers/assembly'
import { Icons } from '@@'
import './styles.less'

export default class HomeSwitch extends Component {
  render() {
    return (
      <div className="hs-box">
        <Switch>
          <Route path="/home" component={Home}/>
          <Redirect to="/home"/>
        </Switch>
        <ul className="hs-foot">
          <li>
            <NavLink to="/home">
              <p><Icons icons="shouye"/></p>
              <p>首页</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <p><Icons icons="gouwuche"/></p>
              <p>购物车</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/my">
              <p><Icons icons="wode1"/></p>
              <p>我的</p>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
