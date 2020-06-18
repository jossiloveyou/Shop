import React, { Component } from 'react'
import './stylesTwo.less'

export default class Chunk_seven extends Component {
  fn = (item, index) => {
    if (index <= 2) {
      return (<dl key={item.gid}>
        <dt><p>{item.title}</p></dt>
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
    console.log(item)
    return (
      <div className='chunk_seven'>
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
