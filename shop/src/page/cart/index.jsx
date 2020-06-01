import React, { Component } from 'react'
import './styles.less'
import Header from '@/components/Header'

export default class Cart extends Component {
  back = () => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div className="cart">
        <Header title='购物车'  back={this.back} />

        <div className="cart-foot">
          
        </div>
      </div>
    )
  }
}
