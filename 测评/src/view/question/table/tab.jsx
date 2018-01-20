import React, { Component } from 'react'

class Tab extends Component {
    
    render () {
       let {dataSource, columns} = this.props
        console.log(this.props)
        return (
            <table>
            <thead>
                <tr>
                    {
                        columns.map((item, i) => {
                            return (
                                <td key={item.key}>{item.title}</td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {
                      dataSource.map((item, i) => {
                            return (
                                <tr key={item.key}>
                                    <td>{item.name}</td>
                                    <td>{item.key}</td>
                                    <td>{item.address}</td>
                                </tr>
                            )
                      })
                    }
            </tbody>
        </table>
        )
    }
}
export default Tab