import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './styles.less'

export default class chunk_six extends Component {
  fn = (item, index) => {
    if (index <= 1) {
      return (<dl key={item.gid}>
        <NavLink to={`/product/${item.gid}`}>
        <dt><p></p>{item.title}</dt>
        <dd><img src={item.image} /></dd>
        </NavLink>
      </dl>)
    }else{
      return (<dl key={item.gid}>
        <NavLink to={`/product/${item.gid}`}>
        <dt>
          <p>{item.title}</p>
        </dt>
        <dd>
          <img src={item.image} />
          <p>{item.price}</p>
        </dd>
        </NavLink>
      </dl>)
    }
  }
  render() {
    const { item } = this.props
    return (
      <div className='chunk_six'>
        <p>{item.title}</p>
        <div>
          {
            item.items.map((item, index) => {
              return this.fn(item, index)
            })
          }
        </div>
      </div>
    )
  }
}
