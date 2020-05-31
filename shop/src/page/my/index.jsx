import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Icons, Modal } from '@@'
import { pathRoute, signOut } from '@/actions/login'
import myTu1 from '@/assets/my-tu1.png'
import myTu2 from '@/assets/my-tu2.png'
import myTu3 from '@/assets/my-tu3.png'
import './styless.less'

const orderForm = [
  {
    img: myTu1,
    name: '待支付',
    id: 1,
  },{
    img: myTu2,
    name: '待收货',
    id: 2
  },{
    img: myTu3,
    name: '待评价',
    id: 3
  },
]

const msg = [
  {name: '个人资料',qita: <Icons icons="youjiantou"/>,id: 1},
  {name: '地址管理',qita: <Icons icons="youjiantou"/>,id: 2},
  {name: '绑定手机',qita: <Icons icons="youjiantou"/>,id: 3},
  {name: '修改密码',qita: <Icons icons="youjiantou"/>,id: 4},
  {name: '我的收藏',qita: <Icons icons="youjiantou"/>,id: 5},
]

export default @connect(state => ({
  userInfo: state.login.userInfo,
  isLogin: state.login.isLogin,
}),{
  pathRoute,
  signOut,
})

class My extends Component {

  state = {
    visible: false
  }

  onClick = () => {
    this.props.history.push('/home')
  }
  logins = () => {
    this.props.pathRoute(this.props.match.path)
    this.props.history.push('/login')
  }

  out = () => {
    this.setState({
      visible: true
    })
  }

  logOut = () => {
    this.setState({
      visible: false
    })
    const { signOut, userInfo } = this.props
    signOut({ uid: userInfo.uid })
    this.props.history.push('/login')
  }

  tz = () => {//模板
    console.log(1)
  }

  judgeLogin = (fn) => {
    const { isLogin } = this.props
    if(isLogin) {
      this.props.history.push('/login') 
    }else{
      switch(fn) {
        case 1:
          this.tz()
          break
        default:
          break
      }
    }
  }

  render() {
    const { visible } =this.state
    const { isLogin } = this.props
    return (
      <div className="my">
        <Header back={this.onClick} title="会员中心" />
        <div className="my-bod">
          <dl className="my-name">
            <dt></dt>
            <dd>
              <p>昵称</p>
              <p>我的积分：0</p>
            </dd>
          </dl>
          <div className="my-order-form">
            <p>
              <span>全部订单</span>
              <span>查看全部订单 <Icons icons="youjiantou"/></span>
            </p>
            <div>
              {
                orderForm.map(item => {
                  return <dl key={item.id}>
                      <dt><img src={item.img} alt=""/></dt>
                      <dd>{item.name}</dd>
                    </dl>
                })
              }
            </div>
          </div>
          <div className="duan"></div>
          <div className="my-msg">
            {
              msg.map(item => {
                return <p key={item.id} onClick={() => this.judgeLogin(1)}>
                  <span>{item.name}</span>
                  <span>{item.qita}</span>
                </p>
              })
            }
          </div>
          <div className="my-but">
            {
              isLogin ?
              <button onClick={this.out}>安全退出</button> 
              : 
              <button onClick={this.logins}>登录/注册</button>
            }
          </div>
        </div>
        <Modal visible={visible} fn={this.logOut}  />
      </div>
    )
  }
}
