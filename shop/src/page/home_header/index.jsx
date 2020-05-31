import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { pathRoute } from '@/actions/login'
import { Icons } from '@@'
import './styles.less'

export default @connect(state => ({}),{
  pathRoute,
})

class HomeHeader extends Component {
  clk = () => {
    this.props.pathRoute(this.props.path)
  }
  render() {
    return (
      <div className="home-header">
          <div>
          {/* 点击到分类 */}
            <NavLink to="/classify"><Icons icons="ai-kind"/></NavLink>
          </div>
          <div>
              <p><Icons icons="sousuo"/></p>
              <input type="text" placeholder="输入喜欢的宝贝名称" ></input>
          </div>
          <div>
              <NavLink to="/login" onClick={this.clk} >登录</NavLink> 
          </div>
      </div>
    );
  }
}

