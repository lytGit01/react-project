import React, {Component} from 'react'

class Conent extends Component {
	render () {
		return (<div className='conent'>{this.props.children}</div>)
	}
}

export default Conent