import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import './dislike.scss'
import Radio from '../../../component/radio'
import Checkbox from '../../../component/checkbox'
import Check from '../../../component/check'
class Dislike extends Component {
    constructor() {
        super()
        this.state = {
            headerJson: headerJson,
            radio: [
                {
                    sex: '有',
                    istrue: false
                },
                {
                    sex: '无',
                    istrue: true
                }
            ],
            food: [
                {name: '羊肉', id: '1'},
                {name: '海鲜', id: '2'},
                {name: '芹菜', id: '3'},
                {name: '胡萝卜', id: '4'},
                {name: '韭菜', id: '5'},
                {name: '西瓜', id: '6'},
                {name: '洋葱', id: '7'},
                {name: '茄子', id: '8'},
                {name: '西红柿', id: '9'},
                {name: '土豆', id: '10'},
            ]
        }
        this.goPage = this.goPage.bind(this)
        this.icon = this.icon.bind(this)
        this.check = this.check.bind(this)
    }
    goPage() {
    }
    icon (is,sex) {
        if (sex === '有') {
            this.setState((state) => {
                state.radio[0].istrue= true
                state.radio[1].istrue= false
                state.radio = state.radio        
                return state;
            })
        } else {
            this.setState((state) => {
                state.radio[1].istrue= true
                state.radio[0].istrue= false
                state.radio = state.radio        
                return state;
            })
        }
    }
    check (id) {
        this.setState((state) => {
            if(state.food[id-1].cls){
                state.food[id-1].cls = ''
                this.props.dispatch({
                    type: 'dislikeDe',
                    val: state.food[id-1].name
                })
            }else{
                state.food[id-1].cls = 'show'
                this.props.dispatch({
                    type: 'dislikeIn',
                    val: state.food[id-1].name
                })
            }
            return state
        })  
    }
    componentDidMount() {
        let dislike = this.props.dislike
        this.state.food.forEach((item, i) => {
            dislike.forEach((val, j) => {
                if(item.name === val) {
                    console.log(item.name)
                    this.setState((state) => {
                        state.food[i].cls = 'show'      
                        return state;
                    })
                }
             });
        });
        // console.log(this.state.food)
    }
    render() {
        let { url } = this.props.match
        return (
            <div id='dislike'>
                <Header headerJson={this.state.headerJson}></Header>
                <div className="main">
                    <img src="../../../src/static/images/5.gif" alt="" />
                    <div className="box">
                        <h1>不喜欢吃的食物</h1>
                        <div className="box-inser">
                            {
                                this.state.food.map((item, ind) => {
                                    return (<p key={item.id} className='pk'><Check check={this.check} id={item.id} cls={item.cls}></Check><span>{item.name}</span></p>)
                                })
                            }
                        </div>
                    </div>
                    <Link to='/question/feel'><div onClick={this.goPage} className='but'></div></Link>
                </div>
            </div>
        )
    }
}
export default connect(function(state){
    return {
        dislike: state.dislike
    }
})(Dislike)
