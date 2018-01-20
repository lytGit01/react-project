import React, {Component} from 'react'
import ReactDOM from 'react-dom'
console.log(ReactDOM)
class Tooltip extends Component {
    constructor () {
        super()
        this.el = document.querySelector('.info')
        console.log(this.el)
    }
    render () {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}
export default Tooltip