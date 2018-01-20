import React, {Component} from 'react'
class Check extends Component {
    constructor () {
        super()
        this.state = {
        }
        this.check = this.check.bind(this)
    }
    check () {
      this.props.check(this.props.id)
    }
    render () {
        return (<small onClick={this.check} className={this.props.cls}></small>)
    }
}
export default Check