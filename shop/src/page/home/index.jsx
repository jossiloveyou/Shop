import React, { Component } from 'react'

import { Swiper } from '@@'

import HomeHeader from '@/page/home_header'
<<<<<<< HEAD
import Navs from '@/page/home_navs'
import Recommend from '@/page/home_recommend'
import Swiper from '@/components/Swiper'
=======
>>>>>>> ba0ea0d5a82ec93de5670a8d0c4186c2d8cd410c
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
          bannerData.length ? <Swiper data={bannerData} /> : null
        }
        {
          navs.length ? <Navs navs={navs}></Navs> : undefined
        }
        <Recommend />
      </div>
    )
  }
}

