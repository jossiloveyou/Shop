import React, { Component } from 'react'
import { Icons } from '@@'
import './styles.less'
export default class Header extends Component {
  
  render() {
    const { title, back } = this.props
    return (
      <div className="head-box">
        <div onClick={back}><Icons icons="fanhui" /></div>
        <div>{title}</div>
        <div></div>
      </div>
    )
  }
}
