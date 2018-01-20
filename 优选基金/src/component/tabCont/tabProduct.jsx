import React, {Component} from 'react'

class TabProduct extends Component {
    constructor () {
        super()
    }
    render () {
        return (this.props.isproduct && <div className='tab-product'>
            {this.props.children}
        </div>)
    }
}
export default TabProduct