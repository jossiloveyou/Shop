import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { Header, Icons } from '@@'
import { memberLogin } from '@/actions/login'
import './styles.less'

export default @connect(state => ({
}),{
  memberLogin,
})
@Form.create()

class Login extends Component {

  back = () => {//返回
    this.props.history.go(-1)
  }
  reg = () => {
    this.props.history.push('/reg')
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { memberLogin } = this.props
        memberLogin(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="login-box">
        <Header title="登录" back={this.back}/>
        <div className="login-sr">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('cellphone', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                  <Input 
                    placeholder="手机号"
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
                登录
              </Button>
            </Form.Item>
          </Form>
          <div className="login-bot">
            <span><Icons icons="icon-"/>忘记密码</span>
            <span onClick={this.reg}><Icons icons="shouji"/>快速注册</span>
          </div>
        </div>
      </div>
    )
  }
}
