import React from 'react'
import ReactDOM from 'react-dom'
import * as router from 'react-router-dom'
const {BrowserRouter, Link, Route} = router
console.log(Route)
// 判断是什么阶段
if (NODE.ENV === 'development') {
	console.log('现在是开发阶段')
} else {

}

import Home from './view/home'

ReactDOM.render(
	<Home/>,
	document.getElementById('root')
)