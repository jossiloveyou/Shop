import { FETCH_LOGIN } from '@/constants/actionTypes'
import { message } from 'antd'
const stateDefault = {
  userInfo: {},
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      console.log(action.payload);
      if(action.payload.code === 200){
        message.success("登录成功")
        state.userInfo = action.payload.data        
      }else{
        message.error(action.payload.data)
        state.userInfo = {}
      }
      return { ...state, userInfo: state.userInfo }
    default:
      return state
  }
}