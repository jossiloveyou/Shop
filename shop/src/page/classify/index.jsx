import React, { Component } from 'react'
<<<<<<< HEAD
import { Icons } from '@@'
import { get } from '@/utils/request'
import api from '@/services/api'
import { NavLink, Route, Redirect } from 'react-router-dom'
import Item from '../item'
=======
import { NavLink, Route, Redirect } from 'react-router-dom'
import { Icons } from '@@'
import { get } from '@/utils/request'
import api from '@/services/api'
import Item from './item'
>>>>>>> f86f5b1f1f4911be5ac849dc3535b6e2ef012fb8
import './styles.less'
//分类页
export default class index extends Component {
  state={
    classify:[],
    index:[]
  }
  componentDidMount () {
    get(api.classify).then(res => {
      this.setState({
        classify: res.data
      })
    })
  }
  onClick = () => {
    this.props.history.push('/home')
  }
  color=(id)=>{
    this.setState({
      index:id
    })
  }
  render() {
    const { classify, index } = this.state
    return (
      <div className="classify_box">

          <div className="classify_top">
            <div onClick={this.onClick}>
              <Icons icons="fanhui" />
            </div>
            <div>
              <input type="text" placeholder="请输入宝贝名称"/>
            </div>
          </div>

          <div className="classify_con">
            <div className="classify_left">
              {
                classify.map((v,i)=>{
                  return <p key={i}>
                    <NavLink  to={`/classify/item/${v.cid}`}
                     onClick={()=>{this.color(i)}}
                     className={index === i ? 'col' : ''}>
                      {v.title}
                    </NavLink>
                  </p>
                })
              }
            </div>
            <div className="classify_right">
                <Route path="/classify/item/:id" component={Item}/>
                <Redirect from="/classify/item" to="/classify/item/:492" />
            </div>
          </div>

      </div>
    )
  }
}
