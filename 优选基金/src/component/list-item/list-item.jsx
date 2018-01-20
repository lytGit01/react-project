import React, {Component} from 'react'
import './list-item.scss'
class ListItem extends Component {
    constructor () {
        super()
        this.state = {
        }
    }
    render () {
        return (<div className='list-item'>
            <p>
                <i className={`icon iconfont ${this.props.singerJson.leftIcon}`}></i>
                <small>{this.props.singerJson.leftName}</small>
            </p>
            <p>
                <i>{this.props.singerJson.rightName}</i>
                <small>{this.props.singerJson.rightIcon}</small>
            </p>
        </div>)
    }
}
export default ListItem