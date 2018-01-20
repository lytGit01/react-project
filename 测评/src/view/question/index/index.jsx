import React, { Component } from 'react'
import {BrowserRouter,Link,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import './index.scss'
import RouteWithSubRoute from '../../../component/subRoute'
class Question extends Component {
    constructor () {
		super()
		this.state = {
            headerJson: headerJson       
        }
        this.goPage = this.goPage.bind(this)
    }
    goPage () {
        alert(5)
    }
    componentDidMount () {
	}
    render() {
        let {url} = this.props.match
        let routes = this.props.children
        return (        
            <BrowserRouter>
                <Switch>
                    {/* <Route exact path='/' render={() => <Redirect to='/home'/>}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/start' component={Start}></Route>
                    <Route path='/question' component={Question}></Route> */}
                    {/* <Redirect from='/question' to='/question/case'></Redirect> */}
                    {routes.map((item, i) => {
                        // return (<Route path={item.path} key={i} render={(props) => {
                        //     return (<item.component children={item.children} {...props}></item.component>)
                        // }}></Route>)
                        return (<RouteWithSubRoute path={item.path} key={i} component={item.component} children={item.children}></RouteWithSubRoute>)
                    })}
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Question