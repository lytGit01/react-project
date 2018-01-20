import React, { Component } from 'react'
import {BrowserRouter,Link,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import Home from '../home/home'
import Start from '../start/start'
import Foot from '../foot/foot'
import Case from '../case/case'
class Indexs extends Component {
    render() {
        let {url} = this.props.match
        console.log(url)
        return (
            
            <React.Fragment>
                <BrowserRouter>
                        <React.Fragment>
                        <Route path={`${url}/home`} component={Home}></Route>
                        <Route path={`${url}/start`} component={Start}></Route>
                        <Route path={`${url}/foot`} component={Foot}></Route>
                        <Route path={`${url}/case`} component={Case}></Route>
                        </React.Fragment>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Indexs