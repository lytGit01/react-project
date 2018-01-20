import React, {Component} from 'react'
import Child1 from './child1'
import Child2 from './child2'
import headerJson from '../../api/header.json'
import Header from '../../component/header'
import Main from '../../component/main'
import List from '../../component/list'
import listJson from '../../api/list.json'
import Text from '../../component/textColumn'
import * as router from 'react-router-dom'
const {BrowserRouter,Link,Route} = router
// 组件
import Swipers from '../../component/swiper'
import './home.scss'
import { connect} from 'react-redux'
import Tooltip from '../../component/tooltip'
console.log(Tooltip)
class Home extends Component{
    constructor () {
		super()
		this.state = {
			headerJson: headerJson,
			textJson: [
				{
					"id": "1",
					"tit": "累计成交金额",
					"money": "29,089,80万元"
				},
				{
					"id": "2",
					"tit": "为投资人获取利益",
					"money": "29,089,80万元"
				}
			]
		}
		this.updata_peom_list = this.updata_peom_list.bind(this)
    }
    componentDidMount () {
		this.setState((state) => {
			state.headerJson[1].icon = 'icon-zhaocaibao'
			state.headerJson[1].name = '开财宝'
			state.headerJson[2].icon = 'icon-fuwuerji'
			return state
		})
		
	}
	updata_peom_list () {
		// let {dispatch} = this.props
		// dispatch({
		// 	type: 'goodlist',
		// 	data: this.refs.put.value
		// })
		
		this.props.updata(this.refs.put.value)
	}
	render () {
		
        let {url} = this.props.match
		return (<div className='mainBox' id='home'>
        <Header headerJson={this.state.headerJson}></Header>   
		<Main>
		<Swipers></Swipers>
			<div className="text-list">
			{
				this.state.textJson.map((item, i) => {
					return (
						<Text item={item} key={item.id}></Text>
					)
				})
			}
			</div>
		
		<List listJson={listJson} symbol={false}></List>
		<input type="text" ref='put'/>
		<div onClick={this.updata_peom_list} dangerouslySetInnerHTML={{__html: '<h1>恋蝶花</h1><script></script>'}}></div>
		<div>
			{this.props.poem}
		</div>
		<Tooltip></Tooltip>
		</Main>
        </div>)
	}
}
function mapStateToprops(state){
	console.log(state)
	return {
		poem: state.arr
	}
}
function mapDispatchToProps (dispatch) {	
	return {
		updata: (value) => {
			fetch('../../src/api/data.json').then(res=>res.json()).then(res => {
				console.log(res)
			})
			dispatch({
			type: 'goodlist',
			data: value
			})
		}
	}
}
export default connect(mapStateToprops,mapDispatchToProps)(Home)