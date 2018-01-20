import React, {Component} from 'react'
import './textColumn.scss'

class TextColumn extends Component {
    constructor () {
        super()
    }
    render () {
        return (<div className='text-column'>
            <small>{this.props.item.tit}</small>
            <span>{this.props.item.money}</span>
        </div>)
    }
}
export default TextColumn