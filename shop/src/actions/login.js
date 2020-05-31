import { FETCH_LOGIN, FETCH_PATH } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export async function memberLogin (options) {
  return {
    type: FETCH_LOGIN,
    payload: post(api.login, options)
  }
}

export async function pathRoute (options) {
  return {
    type: FETCH_PATH,
    payload: options
  }
}