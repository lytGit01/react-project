import React,{ Component } from 'react'
import './mask.scss'
class Mask extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            <React.Fragment>
                {
                    this.props.none && 
                        <div className='componentMask'>
                        <div className="componentMask_box">             
                        {this.props.children}
                        </div>                   
                    </div>
                    }
                }
            </React.Fragment>
        )
    }
}
export default Mask