import { FETCH_REG } from '@/constants/actionTypes'
const stateDefault = {
  data: [],
}

export default function reg (state = stateDefault, action) {
  switch (action.type) {
    case FETCH_REG:
      console.log(action)
      return { ...state }
    default :
      return state
  }
}