import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import lx from '@/reducer/lx'
import form from '@/reducer/getState'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const rootPersistConfig={
  key:'root',
  storage,
  stateReconciler:autoMergeLevel2,
  whitelist:['form']
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const mypersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    lx,form
  }),
  
)

const store = createStore(
  mypersistReducer,
  composeEnhancers(applyMiddleware(thunk,promise))
)

export {store} 