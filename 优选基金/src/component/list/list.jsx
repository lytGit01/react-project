import React, {Component} from 'react'
import Canvas from '../canvas/index'
import './list.scss'
class List extends Component {
    constructor () {
        super()
    }
    render () {
        return (
            this.props.listJson.map((item, i) => {
                var num = item.percentum;
                var numArr = num.split('.')
                return <dl className='list' key={item.id}>
                <dt>
                    <div className="list-dt-tit">
                    <strong>{item.title}</strong><small> ( {item.titleNum} ) </small>
                    </div>
                    <div className="list-dt-cont">
                    <div className="left">
                    <p>
                        <small>{this.props.symbol && '+'}</small>{numArr[0]}<small>.{numArr[1]}</small>
                        <span className="pos">
                        {item.perName}
                        </span>
                    </p>
                    
                    </div>
                    <div className="right">
                    <span>单位净值</span>
                    <small>{item.netValue}</small>
                    </div>
                    </div>
                </dt>
                <dd>
                    <div className="list-dd-tit">
                        <span>{item.titCanvas}</span>
                    </div>
                    <div className="list-dd-cavs">
                    <Canvas id={item.id} radian={item.radian}></Canvas>
                    </div>
                    <div className="list-dd-bot">
                    已有<span><small>{item.people}</small>人</span>购买
                    </div>
                </dd>
            </dl>
            })
        
        )
    }
}
export default List