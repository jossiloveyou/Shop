import React, { Component } from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'

import './styles.less'
import Header from '@/components/Header'


export default @connect(state => {
  return {
    data:state.cart.data
  }
})

 class Cart extends Component {
  state={
    sum:0,
    num:1
  }

  back = () => {
    this.props.history.push('/home')
  }

  inpchange = e => {
    // this.setState({
    //   num: e.target.value
    // })
  }

  upp = (id, e) => {
    if(e.target.nextSibling.children[0].value > 1){
      e.target.nextSibling.children[0].value = e.target.nextSibling.children[0].value*1-1
      this.props.dispatch({
        type:'upp',
        payload:id
      })
    }
    this.setState({
      num:0
    })
  }

  add = (id, e) => {
    e.target.previousSibling.children[0].value = e.target.previousSibling.children[0].value*1+1
    this.props.dispatch({
      type:'add',
      payload:id
    })
    this.setState({
      num:1
    })
  }

  render() {
    const { sum, num } = this.state
    const { data } = this.props
    console.log(data)
    return (
      <div className="cart">
        <Header title='购物车'  back={this.back} />
        <div className="cart-section">
          {
            data.length>0?data.map((v,i) => {
              return <div key={i}>
                <p><Checkbox className="checkbox"/></p>
                <dl>
                  <dt><img src="" alt=""/></dt>
                  <dd>
                    <p>{v.title}</p>
                    <p>颜色：白色  尺寸：M</p>
                    <p>￥{v.price}</p>
                  </dd>
                </dl>
                <p className="pp1">
                  <span onClick={(e) => {this.upp(v.id,e)}}>-</span>
                  <span><input type="text" value={v.num}  onChange={this.inpchange}/></span>
                  <span onClick={(e) => {this.add(v.id,e)}}>+</span>
                </p>
                <p className="dell">删除</p>
              </div>
            }):'暂无数据'
          }
        </div>
        <div className="cart-foot">
          <p>
            <span><Checkbox style={{width:"0.3rem",height:"0.3rem",marginLeft:"0.2rem",display:"block",marginTop:"0.28rem",marginRight:"0.2rem"}}/></span>
            <span>全选</span>
          </p>
          <p>
            <span>合计：</span>
            <span>￥{sum.toFixed(2)}</span>
          </p>
          <p>
            <button>去结算</button>
          </p>
        </div>
      </div>
    )
  }
}
