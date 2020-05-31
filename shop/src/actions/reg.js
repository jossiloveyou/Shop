import { FETCH_REG, FETCH_CODE } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function memberReg (options) {
  return {
    type: FETCH_REG,
    payload: post(api.reg, options)
  }
}

export function getCode (options) {
  return {
    type: FETCH_CODE,
    payload: `${api.vcode}&nowtime=${options}`
  }
}