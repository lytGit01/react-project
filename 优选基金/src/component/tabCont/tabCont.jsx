import React, {Component} from 'react'
import TabFund from './tabFund'

class TabCont extends Component {
    constructor () {
        super()
    }
    render () {
        return (<div className='tab-cont'>
           {this.props.children}
        </div>)
    }
}
export default TabCont