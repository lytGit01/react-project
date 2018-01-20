import React, {Component} from 'react'
import {connect} from 'react-redux'

class Checkbox extends Component {
    constructor () {
        super()
        this.state = {
        }
        this.check = this.check.bind(this)
    }
    check () { 
        let pi = this.props.pkey;
        let ci = this.props.children.id 
        if(this.props.pkey || this.props.pkey == 0){
            this.props.check(pi, ci)
        }else{
            this.props.check(ci)
        }
    }
    render () {
        return (<span onClick={this.check} className={this.props.children.cls}>{this.props.children.name}</span>)
    }
}
// function mapDispatchToProps (dispatch) {	
// 	return {
// 		updata: (id) => {
// 			dispatch({
// 			type: 'case',
// 			id: id
// 			})
// 		}
// 	}
// }
export default Checkbox