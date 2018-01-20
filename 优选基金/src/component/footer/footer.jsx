import React, {Component} from 'react'
import Singer from './footerSinger.jsx'
class Footer extends Component {
    constructor () {
        super()
    }
    render () {
        return (<footer className='footer' id='footer'>
        {
            this.props.children
        }       
        </footer>)
    }
}
export default Footer