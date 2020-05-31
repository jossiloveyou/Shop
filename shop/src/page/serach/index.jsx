import React, { Component } from 'react'
import { Input, Icon } from 'antd';
import './styles.less'
import { get } from '@/utils/request'
import api from '@/services/api'
import axios from 'axios'
const { Search } = Input 

export default class index extends Component {
  onClick=()=>{
    this.props.history.go(-1)
  }
  state={
    serach:[]
  }
  componentDidMount () {
    // get(api.serach).then(res => {
    //   this.setState({
    //     serach: res
    //   })
    // })
    axios.get('http://localhost/api/home/goods/param?kwords=连衣裙&token=1ec949a15fb709370f').then(res=>{
      this.setState({
        serach: res
      })
    })
  }
  render() {
    const { serach } =this.props
    console.log(serach)
    return (
       <div className="search">
        <div className="search-top">
          <Icon type="close" onClick={this.onClick} />
          <Search
            placeholder="请输入宝贝名称"
            onSearch={(value) => this.onSearch(value)}
          />
        </div>
        <div className="search-con">
          <p>热门搜索</p>
          <div>
            <span>555</span>
          
          </div>
        </div>
      </div>
    )
  }
}
