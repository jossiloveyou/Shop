import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Header, Icons } from '@@'
import { memberReg, getCode } from '@/actions/reg'
import './styles.less'

export default @connect(state => ({
  vCode: state.reg.vCode
}),{
  memberReg,
  getCode,
})
@Form.create()

class Reg extends Component {

  constructor(props) {
    super(props)
    const { getCode } = this.props
    getCode()
  }
  

  back = () => {
    this.props.history.go(-1)
  }

  code = () => {
    console.log(1);
    const { getCode } = this.props
    getCode()
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { memberReg } = this.props 
        memberReg(values)
          .then(res => {
              if(res.payload.code === 200){
                this.props.history.push('/login')
              }
          })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { vCode } = this.props
    console.log(vCode);
    return (
      <div className="reg-box">
        <Header title="注册" back={this.back}/>
        <div className="reg-sr">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('vcode', {
                rules: [{ required: true, message: '请输入验证码!' }],
              })(
                <Input 
                  placeholder="验证码"
                  prefix={<img src={vCode} alt="" onClick={this.code} />}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('cellphone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input
                  className="getCode" 
                  placeholder="请输入手机号"
                  prefix={<Icons icons="huoquyanzhengma"/>}
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input.Password
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
