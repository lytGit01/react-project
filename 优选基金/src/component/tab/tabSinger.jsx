import React, {Component} from 'react'

class TabSinger extends Component {
    constructor () {
        super()
    }
    render () {
        return (<div className='money-tab-singer'>
            {this.props.item.name}
        </div>)
    }
}
export default TabSinger