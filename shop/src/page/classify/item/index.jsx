import React, { Component } from 'react'
import './styles.less'
import axios from 'axios'
export default class index extends Component {
  state={
    rightData:[]
  }
componentWillReceiveProps(nextProps){
    let id=nextProps.match.params.id
    axios.get('http://vueshop.glbuys.com/api/home/category/show?cid='+id+'&token=1ec949a15fb709370f').then(res=>{
        this.setState({
          rightData:res.data.data
        })
    })
}
  render() {
    let {rightData}=this.state
    return (
      <div className="item_box">
        {
          rightData=="没有数据"?'暂无数据':rightData.map((v,i)=>{
              return <div className="item_nav" key={i}>
                  <div className="item_nav_top">{v.title}</div>
                  <div className="item_nav_con">
                      {
                          v.goods==null?'暂无数据': v.goods.map((v,i)=>{
                          return  <dl key={i}>
                              <dt>
                                  <img src={v.image}/>
                              </dt>
                              <dd>{v.title}</dd>
                          </dl>
                          })
                      }
                  </div>
              </div>
          })
        }
      </div>
    )
  }
}
