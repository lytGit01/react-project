import React, {Component} from 'react'
class Main extends Component {
    constructor () {
        super()
    }
    render () {
        return (<div className='main'>
        {this.props.children}
        </div>)
    }
}
export default Main