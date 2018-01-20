import React, { Component } from 'react'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import './food.scss'
import Radio from '../../../component/radio'
import Checkbox from '../../../component/checkbox'
import {connect} from 'react-redux'
class Food extends Component {
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
                { name: '羊肉', id: '1' },
                { name: '冠海鲜', id: '2' },
                { name: '芹菜', id: '3' },
                { name: '胡萝卜', id: '4' },
                { name: '豆腐', id: '5' },
                { name: '菌类', id: '6' },
                { name: '辣椒', id: '7' },
                { name: '空气过敏', id: '8' }
            ]
        }
        this.goPage = this.goPage.bind(this)
        this.icon = this.icon.bind(this)
        this.check = this.check.bind(this)
    }
    componentDidMount() {
        let food = this.props.food
        this.state.food.forEach((item, i) => {
            food.forEach((val, j) => {
                if(item.name === val) {
                    console.log(item.name)
                    this.setState((state) => {
                        state.food[i].cls = 'cls'      
                        return state;
                    })
                }
             });
        });
    }
    goPage() {
        alert(5)
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
        console.log(this.state.radio) 
    }
    check (id) {
        this.setState((state) => {
            if(state.food[id-1].cls){
                state.food[id-1].cls = ''
                this.props.dispatch({
                    type: 'foodDe',
                    val: state.food[id-1].name
                })
            }else{
                state.food[id-1].cls = 'cls'
                console.log(state.food[id-1].name)
                this.props.dispatch({
                    type: 'foodIn',
                    val: state.food[id-1].name
                })
            }
            return state
        })
        
    }
    render() {
        let { url } = this.props.match
        return (
            <div id='foot'>
                <Header headerJson={this.state.headerJson}></Header>
                <div className="main">
                    <img src="../../../src/static/images/5.gif" alt="" />
                    <div className="box">
                        <h1>有无过敏食物</h1>
                        <div className='box-radio'>
                            {
                                this.state.radio.map((item, i) => {
                                    return <div key={i}><Radio icon={this.icon} istrue={item.istrue} item={item}></Radio><small>{item.sex}</small></div>
                                })
                            }

                        </div>
                        <div className="box-inser">
                            {
                                this.state.food.map((item, i) => {
                                    return <Checkbox key={item.id} id={item.id} check={this.check}>{item}</Checkbox>
                                })
                            }
                        </div>
                    </div>
                    <Link to='/question/dislike' className='but'><div onClick={this.goPage}></div></Link>
                </div>
            </div>
        )
    }
}
export default connect(function(state){
return {
   food: state.food
}
})(Food)