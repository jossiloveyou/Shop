import React, { Component } from 'react'
import { Header } from '@@'

export default class pay extends Component {
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
         <Header back={this.back} title="待支付"/>
      </div>
    )
  }
}
