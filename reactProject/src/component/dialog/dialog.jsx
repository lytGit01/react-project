import React, {Component} from 'react'
import './dialog.scss'
import Conent from './conent'
import Title from './title'
import Message from './message'
import Button from './button'
class Dialog extends Component{
	constructor () {
		super()
		this.state = {
			isshow: false
		}
		this.close = this.close.bind(this)
		this.confirm = this.confirm.bind(this)
	}
	show () {
		this.setState(state => {
			state.isshow = true	
			return state
		})
	}
	close () {
		this.setState(state => {
			state.isshow = false	
			return state
		})
	}
	confirm () {
		this.close()
		this.props.callback()
	}
	render () {
		let isshow = this.state.isshow
		return (isshow && <div className='dialog'>
			<Conent>
				<Title>今天晚上吃饭呢？<span onClick={this.close}>X</span></Title>
				<Message>今天晚上不吃饭</Message>
				<Button onClose={this.confirm}>确认</Button>
				<Button onClose={this.close}>取消</Button>
			</Conent>	
		</div>)
	}
}
export default Dialog