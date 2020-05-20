import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Router from './router'


import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/lib/integration/react'


// import { store } from './store'
import { store } from './store1'
import { Provider } from 'react-redux'

import './assets/rem'
import './assets/reset.css'

import {ConfigProvider} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <ConfigProvider locale={zhCN}>
        <Router/>
      </ConfigProvider>
    </PersistGate>
  </Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
