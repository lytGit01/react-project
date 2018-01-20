import React, {Component} from 'react'
import Header from '../../component/header'
import Main from '../../component/main'
import ListItem from '../../component/list-item'
import myListItem from '../../api/myListItem.json'
import Navinger from '../../component/navSinger'
import Button from '../../component/button'
import myNavJson from '../../api/myNav.json'
import Navsinger from '../../component/navSinger'
import './my.scss'
class My extends Component{
	constructor () {
		super(),
		this.state = {
			myListItem: myListItem,
			myNavJson: myNavJson
		}
	}
	componentDidMount () {
	}
	render () {
		return (<div id='my' className='mainBox'>
			<div className="loagin">
			<div className="headrImg">
				<img src="../src/static/images/1.jpg" alt=""/>
			</div>
			<div className="loaginRegister">
				<Button inser={'登陆'}></Button>
				<Button inser={'注册'}></Button>
			</div>
			</div>
			<Main>
				<div className="my-list-nav">
				{this.state.myNavJson.map((item, i) => {
					return (<Navsinger item={item} key={item.id}></Navsinger>)
				})}
				</div>
				<div className="my-list-item">
					{
						this.state.myListItem.map((item, i) => {
							return (
								<ListItem singerJson={item} key={i}></ListItem>
							)
						})
					}
				</div>
				
			</Main>
		</div>)
	}
}
export default My