import React, {Component} from 'react'

class HeaderSinger extends Component {
    constructor () {
        super()
    }
    render () {
        return (<p className='hsinger'>
        <i className={`icon iconfont ${this.props.item.icon}`}></i>
        <small>{this.props.item.name}</small>
      </p>)
    }
}
export default HeaderSinger