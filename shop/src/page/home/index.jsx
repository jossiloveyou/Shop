import React, { Component } from 'react'
import { Swiper } from '@@'
import HomeHeader from '@/page/home_header'
import Navs from '@/page/home_navs'
import Rec from '@/page/home_recommend'
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default class Home extends Component {
  state={
    bannerData:[],
  }
  componentDidMount () {
    post(api.swipe).then(res => {
      this.setState({
        bannerData: res.data
      })
    })
    
  }
  render() {
    let { bannerData } = this.state
    return (
      <div className="home-box">
        <HomeHeader />
        {
          bannerData.length ? <Swiper data={ bannerData } /> : null
        }
        <Navs />
        <Rec />
      </div>
    )
  }
}

