import React, {Component} from 'react'

class Tab extends Component {
    constructor () {
        super()
        this.tab = this.tab.bind(this)
    }
    tab (id) {
        this.props.onClickTab(id)
    }
    render () {
        return (<div className='money-tab'>
            {
                this.props.tabData.map((item, i) => {
                    return (<div className={item.cls} key={item.id} onClick={() => this.tab(item.id)}>
                    {item.name}
                </div>)
                })
            }
        </div>)
    }
}
export default Tab