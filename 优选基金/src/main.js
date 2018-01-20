import React from 'react'
import ReactDOM from 'react-dom'
import Home from './view/home/home'
import More from './view/more/more'
import My from './view/my/my'
import Moneys from './view/money/money'
import Indexs from './view/index/index'
import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route, NavLink, Redirect, Switch} = router
import *  as redux from 'redux'
import { Provider } from 'react-redux'
import store from './store'
import es6Promise from 'es6-promise'
es6Promise.polyfill()
import 'isomorphic-fetch'



let increment = document.querySelector('.increment')
let decrement = document.querySelector('.decrement')
let addVal = document.querySelector('.addVal')
let putVal = document.querySelector('.putVal')
increment.onclick = function () {
    store.dispatch(activeCerate('increment'))
}
decrement.onclick = function () {
    store.dispatch(activeCerate('decrement'))
}
addVal.onclick = function () {
    console.log(putVal.value)
    store.dispatch({
        type: 'goodlist',
        data: putVal.value
    })
}
store.subscribe(() => {
    
    console.log(store.getState())
})

// 判断是什么阶段

if (NODE.ENV === 'development') {
    console.log('现在是开发阶段')
} else {

}

import Money from './view/money/money'
import Index from './view/index/index'
import './static/css/rest.css'
import './static/css/wrap.scss'
import './static/icon/icon1/iconfont.css'
import rem from './static/js/rem'
rem(375, 50)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/index/money'/>}></Route>
                <Route path='/index' component={Indexs}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)