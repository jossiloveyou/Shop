import React, { Component } from 'react'
import HomeHeader from '@/page/home_header'
import Navs from '@/page/home_navs'
import Recommend from '@/page/home_recommend'
import Swiper from '@/components/Swiper'
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default class Home extends Component {
  state={
    bannerData:[],
    navs:[],
  }
  componentDidMount () {
    post(api.swipe).then(res => {
      this.setState({
        bannerData: res.data
      })
    })

    post(api.navs).then(res => {
      this.setState({
        navs: res.data
      })
    })
  }
  render() {
    let { bannerData, navs } = this.state
    console.log(bannerData)
    return (
      <div className="home-box">
        <HomeHeader />
        {
          bannerData.length ? <Swiper data={bannerData}></Swiper> : null
        }
        {
          navs.length ? <Navs navs={navs}></Navs> : undefined
        }
        <Recommend />
      </div>
    )
  }
}

