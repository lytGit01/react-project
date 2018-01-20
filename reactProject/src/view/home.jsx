import React, {Component} from 'react'
import Dialog from '../component/dialog'
class Home extends Component{
	constructor () {
		super()
		this.state = {
			isshow: false
		}
		this.tips = this.tips.bind(this)
		this.callback = this.callback.bind(this)
	}
	tips () {
		this.refs.dialog.show()
	}
	callback () {
		alert('what are you doing?')
	}
	render () {
		return (<div>
			<h1 onClick={this.tips}>Hellow Word!</h1>
			<Dialog ref='dialog' callback={this.callback}></Dialog>
		</div>)
	}
}
export default Home