import React, {Component} from 'react'
class ListItem extends Component {
    constructor () {
        super()
        this.state = {
        }
    }
    render () {
        console.log(this.props.singerJson)
        return (<div className='list'>
            <p>
                <i className={`icon iconfont ${this.props.singerJson.leftIcon}`}></i>
                <small>{this.props.singerJson.leftName}</small>
            </p>
            <p>
                <small>{this.props.singerJson.cenName}</small>
            </p>
            <p>
                <i>{this.props.singerJson.rightName}</i>
                <small>{this.props.singerJson.rightIcon}</small>
            </p>
        </div>)
    }
}
export default ListItem