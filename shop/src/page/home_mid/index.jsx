import React, { Component } from 'react';
import { post } from '@/utils/request'
import api from '@/services/api'
import Seven from './chunk_seven'
import Six from './chunk_six'

export default class HomeMid extends Component {
  state = {
    data: []
  }
  componentDidMount () {
    post(api.hometype)
      .then(res =>{
        this.setState({
          data: res.data
        })
      })
  }

  render() {
    const { data } = this.state
    return (
      <div>
        {
          data.length > 0 ? data.map( (item, index) =>{
            return item.items.length == 6 ? <Six key={index} item={item} /> : <Seven key={index} item={item} />
          }) : null
        }
      </div>
    );
  }
}






