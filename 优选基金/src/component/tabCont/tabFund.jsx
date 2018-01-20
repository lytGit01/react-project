import React, {Component} from 'react'

class TabFund extends Component {
    constructor () {
        super()
    }
    render () {
        return (this.props.isfund && <div className='tab-fund'>
           {this.props.children}
        </div>)
    }
}
export default TabFund