import React, { Component } from 'react'
import { Input, Icon } from 'antd';
import api from '@/services/api'
import './styles.less'
import Swipe from '@@/Swiper'

const { Search } = Input 

export default class Xiang extends Component {
  state={
    val:0,
    a: '<',
    data: {},
    img: []
  }

  fn = () => {
    this.props.history.go(-1)
  }

  componentDidMount () {
    const id = this.props.match.params.id
    api.product(id)
      .then(res => {
        this.setState({
          data: res.data,
          img: res.data.images
        })
      })
    api.pingjia(id)
      .then(res => {
        this.setState({
          pingjia: res.data
        })
      })
  }

  add = () => {
    
  }

  dian = value => {
    this.setState({
      val:value
    })
  }

  render() {
    const { val, a, data, img, pingjia } =this.state
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
                {
                  img.length > 0 ? <Swipe data={img}/> : null
                }
              </div>
              <p>{data.title}</p>
              <p>{data.price}</p>
            </div>:null
        }
        {
          val==1?<div>
              
              <p>{data.bodys}</p>
              {/*图片就不放了,直接把文字放上去，放两行*/}
            </div>:null
        }
        {
          val==2?<div className="jia">
              <p>商品评价{pingjia.length}</p> 
              {
                /*吧评价的数据放这,data改改 */
                pingjia.length > 0 ? pingjia.map((v,i) => {
                  console.log(v)
                  return <dl>
                    <dt>{v.nickname}</dt>
                    <dd>
                      <p>{v.content}</p>
                      <p>{v.times}</p>
                    </dd>
                  </dl>
                }) : null
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
