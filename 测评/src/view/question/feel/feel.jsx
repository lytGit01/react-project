
import React, { Component } from 'react'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import './feel.scss'
import Radio from '../../../component/radio'
import Checkbox from '../../../component/checkbox'
import {connect} from 'react-redux'
class Fell extends Component {
    constructor() {
        super()
        this.state = {
            headerJson: headerJson,
            feelData: [
                {
                    idx: 0,
                    title: '您的皮肤一抓就红，并出现抓痕吗?',
                    choice: [{name: '没有', id: 0},{name: '很少', id: 1},{name: '有时', id: 2},{name: '经常', id: 3},{name: '总是', id: 4}]
                },
                {
                    idx: 1,
                    title: '您平时痰多特别是咽喉部总感觉有痰堵着吗?',
                    choice: [{name: '没有', id: 0},{name: '很少', id: 1},{name: '有时', id: 2},{name: '经常', id: 3},{name: '总是', id: 4}]
                },
                {
                    idx: 2,
                    title: '您吃（喝）凉的东西会感觉不舒服或者怕吃（喝）凉的东西吗?',
                    choice: [{name: '没有', id: 0},{name: '很少', id: 1},{name: '有时', id: 2},{name: '经常', id: 3},{name: '总是', id: 4}]
                },
                {
                    idx: 3,
                    title: '您的皮肤一抓就红，并出现抓痕吗?',
                    choice: [{name: '没有', id: 0},{name: '很少', id: 1},{name: '有时', id: 2},{name: '经常', id: 3},{name: '总是', id: 4}]
                },
                {
                    idx: 4,
                    title: '您平时痰多特别是咽喉部总感觉有痰堵着吗?',
                    choice: [{name: '没有', id: 0},{name: '很少', id: 1},{name: '有时', id: 2},{name: '经常', id: 3},{name: '总是', id: 4}]
                }
            ]
        }
        this.goPage = this.goPage.bind(this)
        this.check = this.check.bind(this)
    }
    componentDidMount() {
        let feel = this.props.feel
        feel.forEach((item, i) => {
            item.forEach((val, j) => {
                this.setState((state) => {
                    state.feelData[i].choice[val].cls = 'cls'
                    return state
                })
        });
        });
    }
    goPage() {
        alert(5)
    }
    check (pi, ci) {
        this.setState((state) => {
            if(state.feelData[pi].choice[ci].cls){
                state.feelData[pi].choice[ci].cls = ''
                this.props.dispatch({
                    type: 'feelDe',
                    val: ci,
                    ind: pi
                })
            }else{
                state.feelData[pi].choice[ci].cls = 'cls'
                console.log(state.feelData[pi].choice[ci].name)
                this.props.dispatch({
                    type: 'feelIn',
                    val: ci,
                    ind: pi
                })
            }
            return state
        })
        
    }
    render() {
        let { url } = this.props.match
        return (
            <div id='feel'>
                <Header headerJson={this.state.headerJson}></Header>
                <div className="main">
                    <img src="../../../src/static/images/6.gif" alt="" />
                    <div className="box">
                    {
                        this.state.feelData.map((item, i) => {
                            return (<div key={i} className='box-cont'>
                                <h1>{item.title}</h1>
                                <div className='cont_check'>
                                {
                                    item.choice.map((items, ind) => {
                                        return (<Checkbox key={items.id} check={this.check} pkey={item.idx}>{items}</Checkbox>)
                                    })
                                }
                                </div>
                            </div>)
                        })
                    }
                    </div>
                    <Link to='/question/table'><div onClick={this.goPage} className='but'></div></Link>
                </div>
            </div>
        )
    }
}
export default connect(function(state){
return {
    feel: state.feel
}
})(Fell)