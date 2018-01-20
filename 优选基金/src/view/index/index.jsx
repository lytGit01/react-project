import React, {Component} from 'react'
import Header from '../../component/header'
import Main from '../../component/main'
import Footer from '../../component/footer'
import Navsinger from '../../component/navSinger'
import footJson from '../../api/footer.json'
import Money from '../money/money'
import Home from '../home/home'
import More from '../more/more'
import My from '../my/my'
import * as router from 'react-router-dom'
import './index.scss'
const {BrowserRouter,Link,Route, NavLink} = router
class Index extends Component{
	constructor () {
		super()
		this.state = {
			footJson: footJson,
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
	render () {
		let {url} = this.props.match
		return (<BrowserRouter><div className='wrap' id='index'>  
            <Route path={`${url}/home`} component={Home}></Route>	
            <Route path={`${url}/more`} component={More}></Route>	
            <Route path={`${url}/my`} component={My}></Route>	
            <Route path={`${url}/money`} component={Money}></Route>
		<Footer footJson={this.state.footJson} id='footer'>
        {this.state.footJson.map((item, i) => {
                return (<NavLink to={url+item.to} key={item.id} exact activeClassName="active"><Navsinger item={item}></Navsinger></NavLink>)
            })}
        </Footer>
        
		</div></BrowserRouter>)
	}
}
export default Index