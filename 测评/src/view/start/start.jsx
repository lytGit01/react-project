import React, { Component } from 'react'
import {BrowserRouter,Link,Route, NavLink, Redirect, Switch} from 'react-router-dom'
import headerJson from '../../api/header.json'
import Header from '../../component/header'
import Radio from '../../component/radio'
import List from '../../component/list-item'
import Mask from '../../component/mask'
import './start.scss'
import { connect } from 'react-redux'
class Start extends Component {
    constructor () {
		super()
		this.state = {
            headerJson: headerJson,
            istrue: false,
            radio: [
                {
                    sex: '男',
                    istrue: true
                },
                {
                    sex: '女',
                    istrue: false
                }
            ],
            none: true
        }
        this.goPage = this.goPage.bind(this)
        this.icon = this.icon.bind(this)
        this.close = this.close.bind(this)
    }
    goPage () {
       
    }
    icon (is,sex) {
        if (sex === '男') {
            this.setState((state) => {
                state.radio[0].istrue= true
                state.radio[1].istrue= false     
                return state;
            })
        } else {
            this.setState((state) => {
                state.radio[1].istrue= true
                state.radio[0].istrue= false     
                return state;
            })
        }
        console.log(this.state.radio) 
    }
    close () {
        this.setState((state) => {
            state.none = false
            return state
        })
    }
    componentDidMount () {
	}
    render() {
        let {url} = this.props.match
        return (        
            <div id='start'>
              <Header headerJson={this.state.headerJson}></Header> 
              <div className="main">
              <img src="../../src/static/images/sex.gif" alt=""/>
              <div className='radio'>
               {
                   this.state.radio.map((item, i) => {
                   return <Radio icon={this.icon} istrue={item.istrue} key={i} item={item}></Radio>
                   })
               }
                
              </div>
              <Link to='/question'><div onClick={this.goPage} className='but'></div></Link>
              </div>
              <Mask none={this.state.none}>
                    <span onClick={this.close}>X</span>
                  <img src="../../src/static/images/mask.gif" alt=""/>
                  <p>
                      亲，我们为你追备好了体质60到测试题，你追备好了么?请耐心测试，如实汇报测试结果
                  </p>
                  <button onClick={this.close}>开始测试</button>
              </Mask>
            </div>
        )
    }
}
export default Start