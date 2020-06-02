import React, { Component } from 'react';
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default class HomeRecommend extends Component {
  state = {
    recommend: [],
  }
  componentDidMount () {
    post(api.recommend).then(res => {
      this.setState({
        recommend: res.data
      })
    })
  }
  tz (gid) {
    console.log(gid)
    
  }
  render() {
    const { recommend } = this.state
    return (
      <div className='home-goods'>
        <p>为您推荐</p>
        <div className="good">
          {
            recommend.length ? recommend.map(item => {
              return <dl key={item.gid} onClick={() => this.tz(item.gid)}>
                <dt><img src={item.image} alt=""/></dt>
                <dd>
                  <p>{item.title}</p>
                  <p>￥{item.price}</p>
                </dd>
              </dl>
            }) : undefined
          }
        </div>
      </div>
    );
  }
}

