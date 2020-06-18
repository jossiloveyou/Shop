import React, { Component } from 'react'
import './styles.less'

export default class chunk_six extends Component {
  fn = (item, index) => {
    if (index <= 1) {
      return (<dl key={item.gid}>
        <dt><p></p>{item.title}</dt>
        <dd><img src={item.image} /></dd>
      </dl>)
    }else{
      return (<dl key={item.gid}>
        <dt>
          <p>{item.title}</p>
        </dt>
        <dd>
          <img src={item.image} />
          <p>{item.price}</p>
        </dd>
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
