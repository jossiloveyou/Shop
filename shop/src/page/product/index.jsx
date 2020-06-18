import React, { Component } from 'react'
import { Input, Icon } from 'antd';
import './styles.less'
// import { get } from '@/utils/request'
// import api from '@/services/api'

import Swipe from '@@/Swiper'
const { Search } = Input 

export default class Xiang extends Component {
  fn = () => {
    this.props.history.go(-1)
  }
  state={
    val:0,
    a: '<'
  }
  componentDidMount () {
    const id = this.props.match.params.id
  }

  add = () => {
    //加入购物车的reducer
  }

  dian = value => {
    this.setState({
      val:value
    })
  }

  render() {
    const { val, a } =this.state
    // console.log(serach)
    return (
       <div className="xiang">
        <div className="xiang-header">
          <p onClick={this.fn}>{a}</p>
          <p>
            <span onClick={() => {this.dian(0)}}>商品</span>  
            <span onClick={() => {this.dian(1)}}>详情</span>  
            <span onClick={() => {this.dian(2)}}>评价</span>  
          </p>
        </div>
        {
          val==0?<div className="good">
              <div className="xiang-swiper">
                {/* <Swipe data={}/> */}
              </div>
              <p>{'数据就是title'}</p>
              <p>{'price'}</p>
            </div>:null
        }
        {
          val==1?<div>
              
              <p>{'数据就是title'}</p>
              <p>{'数据就是title'}</p>
              {/*图片就不放了,直接把文字放上去，放两行*/}
            </div>:null
        }
        {
          val==2?<div className="jia">
              <p>商品评价{/*数据的长度 */}</p> 
              {
                /*吧评价的数据放这,data改改 */
                /* data.map((v,i) => {
                  return <dl>
                    <dt>{v.name}</dt>
                    <dd>{v.title}</dd>
                  </dl>
                }) */
              }
            </div>:null
        }
        
        
        <div className="xiang-foot">
          <button>收藏</button>
          <button onClick={this.add}>加入购物车</button>
        </div>
      </div>
    )
  }
}
