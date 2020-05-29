import React, { Component } from 'react'
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1851796_e5saolvt1z6.js',
});
export default class Icon extends Component {
  render() {
    const { icons } = this.props
    return (
      <IconFont type={`icon-${icons}`} />
    )
  }
}
