import { FETCH_LOGIN, FETCH_PATH, FETCH_SIGN_OUT } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

//登录
export function memberLogin (options) {
  return {
    type: FETCH_LOGIN,
    payload: post(api.login, options)
  }
}

//登录路径跳转
export function pathRoute (options) {
  return {
    type: FETCH_PATH,
    payload: options
  }
}

//安全退出
export function signOut (options) {
  return {
    type: FETCH_SIGN_OUT,
    payload: post(api.logOut, options)
  }
}