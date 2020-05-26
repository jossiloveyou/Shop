import React, { Component } from 'react'
import { Header } from '@@'
import './styles.less'

export default class Login extends Component {
  back() {//返回
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="login-home">
        <Header title="登录" back={this.back}/>
      </div>
    )
  }
}
