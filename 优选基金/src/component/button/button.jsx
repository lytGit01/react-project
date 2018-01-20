import React, {Component} from 'react'

class Button extends Component {
    constructor () {
        super()
    }
    render () {
        return (<button className='button'>
            {this.props.inser}
        </button>)
    }
}
export default Button