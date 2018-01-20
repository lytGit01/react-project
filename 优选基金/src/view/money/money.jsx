import React, {Component} from 'react'
import Header from '../../component/header'
import Main from '../../component/main'
import Tab from '../../component/tab'
import TabIn from '../../component/tabCont'
const TabCont = TabIn.TabCont
const TabFund = TabIn.TabFund
const TabProduct = TabIn.TabProduct
import Footer from '../../component/footer'
import FooterSinger from '../../component/footer/footerSinger'
import List from '../../component/list'
import listJson from '../../api/list.json'
import footJson from '../../api/footer.json'
import headerJson from '../../api/header.json'

import './money.scss'
// import * as router from 'react-router-dom'
// const {BrowserRouter,Link,Route, NavLink, Redirect, Switch} = router
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link
    // etc.
} from 'react-router-dom'

class Money extends Component{
	constructor () {
		super()
		this.state = {
			footJson: footJson,
			headerJson: headerJson,
			listJson: listJson,
			tabData: [
                {"id": "0", "name": "债券产品","cls": 'cls'},
                {"id": "1", "name": "优选基金","cls": ''}
			],
			product: true,
			fund: false
		}
		this.tab = this.tab.bind(this)
	}
	tab (id) {
		this.state.tabData.forEach((item, i) => {
			item.cls = ''
		})
		this.state.tabData[id].cls = 'cls'
		this.setState((state) => {
			return state.tabData = this.state.tabData
		})
		if (id == 0){
			this.setState({
				product : true,
				fund: false
			})
		} else {
			this.setState({
				product : false,
				fund: true
			})
		}

	}
	componentDidMount () {
		this.setState((state) => {
			state.headerJson[1].icon = ''
			state.headerJson[1].name = '理财产品'
			state.headerJson[2].icon = 'icon-gengduo1'
			return state
		})
	}
	render () {
		return (
			<div id='money' className='mainBox'>
			<Header headerJson={this.state.headerJson}></Header>
			<Main>
			<Tab tabData={this.state.tabData} onClickTab={this.tab}></Tab>
			<TabCont>
				<TabProduct isproduct={this.state.product}>
					<List listJson={listJson} symbol={false}></List>
				</TabProduct>
				<TabFund isfund={this.state.fund}>
					<List listJson={listJson} symbol={true}></List>
				</TabFund>
			</TabCont>
			</Main>
			</div>
		)
	}
}
export default Money