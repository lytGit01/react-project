import React, { Component } from 'react'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './view/home/home.jsx'
import Start from './view/start/start.jsx'
import  Question from './view/question/index/index.jsx'

import router from './router/router.config'
import RouteWithSubRoute from './component/subRoute'

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
    }
    render() {
        let routes = router.routes
        console.log(routes)
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Redirect exact from='/' to='/home'></Redirect>
                        {/* <Route exact path='/' render={() => <Redirect to='/home'/>}></Route>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/start' component={Start}></Route>
                        <Route path='/question' component={Question}></Route> */}
                        
                        <Redirect exact from='/question' to='/question/case'></Redirect>
                        {routes.map((item, i) => {
                            return (<RouteWithSubRoute key={i} path={item.path} component={item.component} children={item.children}></RouteWithSubRoute>)
                        })}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App