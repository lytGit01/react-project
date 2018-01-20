import React, {Component} from 'react'
import Singer from './headerSinger.jsx'
import './header.scss'
class Header extends Component {
    constructor () {
        super()
        this.state = {
        }
    }
    render () {
        return (<header className='header'>
            {
                this.props.headerJson.map((item, i) => {
                     return (<Singer key={item.id} item={item}></Singer>)
                })
            }
        </header>)
    }
}
export default Header