import { message } from 'antd'
import { FETCH_LOGIN, FETCH_PATH, FETCH_SIGN_OUT } from '@/constants/actionTypes'
const stateDefault = {
  userInfo: {},
  pathRoute: '',
  isLogin: false,
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      let obj = {}
      if(action.payload.code === 200){
        obj = action.payload.data  
        state.isLogin = true 
        message.success("登录成功")     
      }else{
        obj = {}   
        message.error(action.payload.data)
      }
      return { ...state, userInfo: obj, isLogin: state.isLogin }  
    case FETCH_PATH:
      return { ...state, pathRoute: action.payload }  
    case FETCH_SIGN_OUT:
      return { ...state, userInfo: {}, isLogin: false }
    default:
      return state
  }
}