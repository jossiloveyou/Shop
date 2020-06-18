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
