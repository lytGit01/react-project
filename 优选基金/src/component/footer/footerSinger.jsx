import React, {Component} from 'react'
import './footer.scss'

class FooterSinger extends Component {
    constructor () {
        super()
    }
    render () {
        return (<p className='fsinger'>
          <i className={`icon iconfont ${this.props.item.icon}`}></i>
          <small>{this.props.item.name}</small>
        </p>)
    }
}
export default FooterSinger