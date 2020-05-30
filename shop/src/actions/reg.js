import { FETCH_REG } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import api from '@/services/api'

export function memberReg (options) {
  return {
    type: FETCH_REG,
    payload: post(api.reg, options)
  }
}