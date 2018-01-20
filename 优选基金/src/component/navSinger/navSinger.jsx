import React, {Component} from 'react'
import './navSinger.scss'

class navSinger extends Component {
    constructor () {
        super()
    }
    render () {
        return (<p className='nav-singer'>
          <i className={`icon iconfont ${this.props.item.icon}`}></i>
          <small>{this.props.item.name}</small>
        </p>)
    }
}
export default navSinger