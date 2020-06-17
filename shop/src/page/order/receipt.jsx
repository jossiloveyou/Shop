import React, { Component } from 'react'
import { Header } from '@@'

export default class receipt extends Component {
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
         <Header back={this.back} title="待收货"/>
      </div>
    )
  }
}
