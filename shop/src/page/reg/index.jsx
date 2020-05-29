import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Header, Icons } from '@@'
import { memberReg } from '@/actions/reg'
import api from '@/services/api'
import './styles.less'

export default @connect(state => ({}),{
  memberReg,
})
@Form.create()

class Reg extends Component {

  back = () => {
    this.props.history.go(-1)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.memberReg(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
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
                  prefix={<img src={api.vcode} alt=""/>}
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
