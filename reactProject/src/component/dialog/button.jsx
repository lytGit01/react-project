import React, {Component} from 'react'

class Button extends Component {
	constructor () {
		super()
		this.handleback = this.handleback.bind(this)
	}
	handleback () {
		this.props.onClose()
	}
	render () {
		return (<button className='but' onClick={this.handleback}>{this.props.children}</button>)
	}
}

export default Button