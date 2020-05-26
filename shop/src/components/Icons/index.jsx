import React, { Component } from 'react'
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776885_4tgwujnc1cl.js',
});
export default class Icons extends Component {
  render() {
    const { icons } = this.props
    return (
      <IconFont type={`icon-${icons}`} />
    )
  }
}
