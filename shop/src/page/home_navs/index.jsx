import React from 'react';
import { NavLink } from 'react-router-dom'
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
    // console.log(navs)
    return(
      <div className="navs">
        {
          navs.map((item,index)=>{
            return <NavLink key={index} to={`/classify/item/${item.cid}`} >
              <dl>
                <dt><img src= {item.image} alt="" ></img></dt>
                <dd>{item.title}</dd>
              </dl>
            </NavLink>
          })
        }
      </div>
    )
  }
}


