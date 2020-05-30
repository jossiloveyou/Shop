import { FETCH_LOGIN } from '@/constants/actionTypes'
import { message } from 'antd'
const stateDefault = {
  userInfo: {},
  status: false
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      let obj = {}
      if(action.payload.code === 200){
        obj = action.payload.data   
        message.success("登录成功")
<<<<<<< HEAD
        return { ...state, ...{userInfo: _.cloneDeep(action.payload.data), status: true}}       
=======
>>>>>>> 16e9eb9d8f4f8ee193d2b52ddc0776b5242f1a63
      }else{
        obj = {}   
        message.error(action.payload.data)
      }
      return { ...state, userInfo: obj }    
    default:
      return state
  }
}