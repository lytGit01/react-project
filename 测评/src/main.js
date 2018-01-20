import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Link,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import *  as redux from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import es6Promise from 'es6-promise'
es6Promise.polyfill()
import 'isomorphic-fetch'
import 'antd/dist/antd.css'


// 判断是什么阶段

if (NODE.ENV === 'development') {
    console.log('现在是开发阶段')
} else {
}

import './static/css/rest.css'
import './static/css/wrap.scss'
import './static/icon/icon1/iconfont.css'
import rem from './static/js/rem'
rem(375, 50)

import App from './app'
ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
)
{/* <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/index/money'/>}></Route>
                <Route path='/index' component={Indexs}></Route>
            </Switch>
        </BrowserRouter>
    </Provider> */}