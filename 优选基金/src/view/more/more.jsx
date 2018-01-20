import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import headerJson from '../../api/header.json'
import Header from '../../component/header'
import Main from '../../component/main'
import moreListItem from '../../api/moreListItem.json'
import ListItem from '../../component/list-item'
import './more.scss'
class More extends Component{
	constructor () {
		super(),
		this.state = {
			headerJson: headerJson,
			moreListItem: moreListItem
		}
	}
	componentDidMount () {
		this.setState((state) => {
			state.headerJson[1].icon = ''
			state.headerJson[1].name = '更多'
			state.headerJson[2].icon = ''
			return state
		})
	}
	render () {
		return (<div id='more' className='mainBox'>
		<React.Fragment>
		<Header headerJson={this.state.headerJson}></Header>
			<Main>
				{
					this.state.moreListItem.map((item, i) => {
						return (
							<ListItem singerJson={item} key={i}></ListItem>
						)
					})
				}
			</Main>
		</React.Fragment>	
		</div>)
	}
}
export default More