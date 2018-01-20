import React, { Component } from 'react'
import {BrowserRouter,Link,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import * as hashHistory from 'React-router' 
import headerJson from '../../api/header.json'
import Header from '../../component/header'
import List from '../../component/list-item'
import './home.scss' 
import * as Router from  'react-router-dom'
import Button from 'antd/lib/button';
console.log(Button)
class Home extends Component {
    constructor () {
		super()
		this.state = {
            headerJson: headerJson,
            list: 
                {
                    "leftIcon": "icon-zuo",
                    "leftName": "",
                    "cenName": "小鲜测试",
                    "rightName": "",
                    "rightIcon": ""
                }
            
        }
        this.but = this.but.bind(this)
    }
    but () {
       console.log(hashHistory.matchPath)
    }
    componentDidMount () {
	}
    render() {
        let {url} = this.props.match
        console.log(url)
        return (        
            <div id='home'>
              <Header headerJson={this.state.headerJson}></Header> 
              <div className="main">
              <Button/>
              <img src="../../src/static/images/4.gif" alt=""/> 
              <Link to='/start'><div onClick={this.but} className='but'></div></Link>
              </div>
            </div>
        )
    }
}
export default Home