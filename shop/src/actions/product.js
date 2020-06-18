import { FETCH_REG, FETCH_CODE } from '@/constants/actionTypes'
import { get } from '@/utils/request'
import api from '@/services/api'

export function Product (options) {
  return {
    type: FETCH_REG,
    payload: get(api.product, options)
  }
}