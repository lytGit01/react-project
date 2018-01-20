import React, { Component } from 'react'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import Radio from '../../../component/radio'
import Checkbox from '../../../component/checkbox'
import TableNav from '../../../component/table_nav'
import {connect} from 'react-redux'
import './table.scss'
import Tab from './tab.jsx'
// 高阶组件
let TableNavs = TableNav(Tab)

class Tables extends Component {
    constructor() {
        super()
        this.state = {
            headerJson: headerJson,
        }
    }
    render() {
        let { url } = this.props.match
        return (
            <div id='table'>
                <Header headerJson={this.state.headerJson}></Header>
                <div className="main">
                    <TableNavs />
                </div>
            </div>
        )
    }
}
export default connect(function(state){
return {
}
})(Tables)