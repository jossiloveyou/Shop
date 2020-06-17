import React, { Component } from 'react'
import { Header } from '@@'

export default class evaluate extends Component {
  back = () => {
    this.props.history.go(-1)
  }
  render() {
    return (
      <div>
        <Header back={this.back} title="待评价"/>
      </div>
    )
  }
}
