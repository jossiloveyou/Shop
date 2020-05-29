import React, { Component } from 'react'
import Swiper from '@/components/Swiper'
import tu1 from '@/assets/tu1.png'
import tu2 from '@/assets/tu2.png'

import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default class Home extends Component {
  state={
    bannerData:[],
    datas:[],
    data:[],
  }
  componentDidMount () {
    post(api.swipe).then(res => {
      this.setState({
        bannerData: res.data
      })
    })
  }
  render() {
    let { bannerData, datas, data} = this.state
    return (
      <div className="home-box">
        <div className="home-fd">
          <div>
              <img src={tu1} ></img>
          </div>
          <div>
              <p><img src={tu2} ></img></p>
              <input type="text" placeholder="输入喜欢的宝贝名称" ></input>
          </div>
          <div>
              登录
          </div>
        </div>
        {
          bannerData.length ? <Swiper data={bannerData}></Swiper> : null
        }
      </div>
    )
  }
}
