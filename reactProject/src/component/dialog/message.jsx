import React, {Component} from 'react'

class Message extends Component {
	render () {
		return (<div className='message'><h2>{this.props.children}</h2></div>)
	}
}

export default Message