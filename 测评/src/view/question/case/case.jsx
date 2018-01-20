import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import headerJson from '../../../api/header.json'
import Header from '../../../component/header'
import List from '../../../component/list-item'
import './case.scss'
import Radio from '../../../component/radio'
import Checkbox from '../../../component/checkbox'
class Case extends Component {
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
            case: [
                {name: '心脏病', id: '1'},
                {name: '冠心病', id: '2'},
                {name: '肺癌', id: '3'},
                {name: '脑残病', id: '4'},
                {name: '手残病', id: '5'},
                {name: '肺癌', id: '6'},
                {name: '肝癌', id: '7'},
                {name: '胃癌', id: '8'}
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
            if(state.case[id-1].cls){
                state.case[id-1].cls = ''
                this.props.dispatch({
                    type: 'caseDe',
                    val: state.case[id-1].name
                })
            }else{
                state.case[id-1].cls = 'cls'
                this.props.dispatch({
                    type: 'caseIn',
                    val: state.case[id-1].name
                })
            }
            return state
        })
        
        
    }
    componentDidMount() {
        let count = this.props.count
        this.state.case.forEach((item, i) => {
            count.forEach((val, j) => {
                if(item.name === val) {
                    console.log(item.name)
                    this.setState((state) => {
                        state.case[i].cls = 'cls'      
                        return state;
                    })
                }
             });
        });
        // console.log(this.state.case)
    }
    render() {
        let { url } = this.props.match
        return (
            <div id='case'>
                <Header headerJson={this.state.headerJson}></Header>
                <div className="main">
                    <img src="../../../src/static/images/5.gif" alt="" />
                    <div className="box">
                        <h1>有无病史</h1>
                        <div className='box-radio'>
                            {
                                this.state.radio.map((item, i) => {
                                    return <div key={i}><Radio icon={this.icon} istrue={item.istrue} item={item}></Radio><small>{item.sex}</small></div>
                                })
                            }

                        </div>
                        <div className="box-inser">
                            {
                               this.state.case.map((item, i) => {
                                return <Checkbox key={item.id} id={item.id} check={this.check}>{item}</Checkbox>
                            }) 
                            }
                        </div>
                    </div>
                    <Link to='/question/food'><div onClick={this.goPage} className='but'></div></Link>
                </div>
            </div>
        )
    }
}
export default connect(function(state){
    return {
        count: state.count
    }
})(Case)
