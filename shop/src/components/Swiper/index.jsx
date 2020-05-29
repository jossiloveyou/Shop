import React, { Component } from 'react';
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import './styles.less'

export default class Swipe extends Component {
  componentDidMount(){
    new Swiper(this.refs.banner,{
        loop:true,
        autoplay:{
            disableOnInteraction:false,
            delay:2000
        },
        pagination:{
            el:'.swiper-pagination',
            clickable :true,
        }
    })
  }
  render() {
    const { data } = this.props
    console.log(data)
    return (

      <div className="Bnner swiper-container" ref="banner"> 
        <div className="swiper-wrapper">
          {
            data.map((item,index)=>{
                return (
                  <div key={index} className="swiper-slide">
                    <img src={item.image ?item.image:item } alt={item.title} />
                  </div>
                )
            })
          }
        </div>
      
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}

