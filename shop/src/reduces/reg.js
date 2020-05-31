import { message } from 'antd'
import { FETCH_REG, FETCH_CODE } from '@/constants/actionTypes'
const stateDefault = {
  vCode: '',
}

export default function reg (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_REG:
      if(action.payload.code === 200){
        message.success("注册成功")     
      }else{
        message.error(action.payload.data)
      }
      return { ...state }
    case FETCH_CODE:
      return { ...state, vCode: action.payload }
    default :
      return state
  }
}