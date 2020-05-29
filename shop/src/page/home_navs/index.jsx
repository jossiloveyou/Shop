import React from 'react';
import { post } from '@/utils/request'
import api from '@/services/api'
import './styles.less'

export default class Nav extends React.Component{
  state = {
    navs: [],
  }
  componentDidMount () {
    post(api.navs).then(res => {
      this.setState({
        navs: res.data
      })
    })
  }
  render(){
    let { navs } = this.state
    return(
      <div className="navs">
        {
          navs.map((item,index)=>{
            return <dl key={index}>
              <dt><img src= {item.image} ></img></dt>
              <dd>{item.title}</dd>
            </dl>
          })
        }
      </div>
    )
  }
}


