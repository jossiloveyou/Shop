import React from 'react';
import './styles.less'

export default class Nav extends React.Component{
  render(){
    let { navs } = this.props
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


