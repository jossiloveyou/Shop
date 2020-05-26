import React, { Component } from 'react'
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776885_9wnl31u3yn7.js',
});
export default class Icons extends Component {
  render() {
    const { icons } = this.props
    return (
      <IconFont type={`icon-${icons}`} />
    )
  }
}
