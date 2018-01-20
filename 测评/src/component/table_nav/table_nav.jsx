import React, {Component} from 'react'

import { Pagination } from 'antd'
console.log(Pagination)
export default (Table) => {
    class TableNav extends Component {
        constructor () {
            super(),
            this.state = {
                page: '0',
                dataSource: [{
                    key: '1',
                    name: '胡彦斌1',
                    age: 32,
                    address: '西湖区湖底公园1号'
                  }, {
                    key: '2',
                    name: '胡彦祖2',
                    age: 42,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '3',
                    name: '胡彦祖3',
                    age: 42,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '4',
                    name: '胡彦祖4',
                    age: 42,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '5',
                    name: '胡彦祖5',
                    age: 42,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '6',
                    name: '胡彦祖6',
                    age: 42,
                    address: '西湖区湖底公园1号'
                }],
                columns: [{
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                  }, {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                  }, {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                }]
            }
            this.change = this.change.bind(this)
        }
        change (page, pageSize) {
            console.log(page, pageSize)
            let start = page*(pageSize-1)
            let arr = this.state.dataSource.splice(start,pageSize)
            console.log(arr)
            this.setState((state) => {
                state.dataSource = arr
                return state
            })
        }
        render () {
            return (
            <React.Fragment>
                <Table dataSource={this.state.dataSource} columns={this.state.columns}/>
                <Pagination defaultCurrent={1} total={this.state.dataSource.length} pageSize={2} onChange={this.change} defaultPageSize={2}/>
            </React.Fragment>
        )
        }
    }
    return TableNav
}