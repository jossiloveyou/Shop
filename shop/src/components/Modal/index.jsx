import React, { Component } from 'react'
import { Modal } from 'antd'
import './styles.less'

export default class Modals extends Component {

  componentWillReceiveProps (nexPops) {
    this.setState({
      visible: nexPops.visible
    })
  }

  state = { 
    visible: false 
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    })
  }

  render() {
    const { fn } = this.props
    return (
      <Modal
          visible={this.state.visible}
          onOk={fn}
          onCancel={this.handleCancel}
        >
          <p>确定要退出么</p>
        </Modal>
    )
  }
}
