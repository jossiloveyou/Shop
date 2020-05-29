import React, { Component } from 'react';
import tu2 from '@/assets/tu2.png'
import { Icons } from '@@'
import './styles.less'

export default class HomeHeader extends Component {
  render() {
    return (
      <div className="home-header">
        <div>
            <Icons icons="fenlei"/>
          </div>
          <div>
              <p><img src={tu2} ></img></p>
              <input type="text" placeholder="输入喜欢的宝贝名称" ></input>
          </div>
          <div>
              登录
          </div>
      </div>
    );
  }
}

