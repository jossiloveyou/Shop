import { message } from 'antd'
import { FETCH_LOGIN, FETCH_PATH } from '@/constants/actionTypes'
const stateDefault = {
  userInfo: {},
  pathRoute: ''
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      let obj = {}
      if(action.payload.code === 200){
        obj = action.payload.data   
        message.success("登录成功")     
      }else{
        obj = {}   
        message.error(action.payload.data)
      }
      return { ...state, userInfo: obj }  
    case FETCH_PATH:
      return { ...state, pathRoute: action.payload }  
    default:
      return state
  }
}