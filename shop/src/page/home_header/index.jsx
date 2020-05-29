import React, { Component } from 'react';
import { Icons } from '@@'
import './styles.less'

export default class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div>
            <Icons icons="ai-kind"/>
          </div>
          <div>
              <p><Icons icons="sousuo"/></p>
              <input type="text" placeholder="输入喜欢的宝贝名称" ></input>
          </div>
          <div>
              登录
          </div>
      </div>
    );
  }
}

