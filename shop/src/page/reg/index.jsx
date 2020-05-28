import React, { Component } from 'react'
import { Header } from '@@'
import './styles.less'
export default class Reg extends Component {
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div className="reg-box">
        <Header title="注册" back={this.back}/>

      </div>
    )
  }
}
