import React, { Component } from 'react'

import { Swiper } from '@@'

import HomeHeader from '@/page/home_header'
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'
import {Link, NavLink} from 'react-router-dom'
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
        <HomeHeader />
        {
          bannerData.length ? <Swiper data={bannerData} /> : null
        }
      </div>
    )
  }
}

