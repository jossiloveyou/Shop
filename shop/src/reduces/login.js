import { FETCH_LOGIN } from '@/constants/actionTypes'
// import { message } from 'antd'
import _ from 'loadsh'
const stateDefault = {
  userInfo: {},
  code: 0,
}

export default function login (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return { ...state, code: _.cloneDeep(action.payload.code), userInfo: _.cloneDeep(action.payload.data) }
    default:
      return state
  }
}