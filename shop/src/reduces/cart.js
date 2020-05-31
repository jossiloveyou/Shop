import { FETCH_ADD, FETCH_DEL } from '@/constants/actionTypes'
import _ from 'loadsh'

const data = {
  data:[]
}

export default function gowu (state = data, action) {
  switch (action.type) {
    case FETCH_ADD:
      const arr={ ...state }
        let a=true
        arr.data.map((v,i)=>{
          if(v.id==action.payload.id){
            v.num++;
            a=false
          }
        })
        if(a){
          arr.data.push(action.payload)
        }
        return { ...state, ...arr }
    case FETCH_DEL:
      const arr = { ...state };
      const newdata = arr.data.filter(v => v.id !== action.payload) 
      return {...state, data: newdata}
    default:
      return state
  }
}
