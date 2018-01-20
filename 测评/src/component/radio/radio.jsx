import React, { Component } from 'react'
import { connect } from 'react-redux'
class Radio extends Component {
    constructor() {
        super()
        this.state = {
            istrue: false
        }
        this.radio = this.radio.bind(this)
    }
    radio(val) {
        this.props.icon(this.props.item.istrue, this.props.item.sex)

    }
    render() {
        return (<React.Fragment>
            <span>
                {this.props.item.istrue ? (
                    <i className="icon iconfont icon-radio" onClick={() => this.radio('radio')}></i>
                    
                ) : (
                        <i className="icon iconfont icon-danxuan" onClick={() => this.radio('danxuan')}></i>
                    )}
            </span>
        </React.Fragment>)
    }
}
export default connect(function (state) {
    return {
        // istrue: state.isture
    }
})(Radio)