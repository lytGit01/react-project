import React, {Component} from 'react'
class Canvas extends Component {
    constructor () {
        super()
    }
    componentDidMount(){
        var cvs = document.getElementById(`can${this.props.id}`)
        var cxt = cvs.getContext('2d')
        var w = cvs.width;
        var h = cvs.height;
        // 画一个实心圆
        var r = h/2 - 5; // 设置半径
        var deg = Math.PI/180; // 圆周率
        cxt.translate(w/2,h/2); // 设置圆心
        cxt.beginPath(); // 开始一个新的路径
        cxt.arc(0,0,r,0,360*deg);
        cxt.fillStyle = '#ff6161'; 
        cxt.fill() // 闭合
     
        // 写字
        cxt.beginPath();
        cxt.fillStyle = '#fff';
        cxt.textAlign = 'center';
        cxt.textBaseline = 'middle';
        cxt.font = '12px 微软雅黑';
        cxt.fillText('抢购',0,0)
        cxt.textAlign = 'center';
 
        // 画弧
        const arc = (d) => {
         cxt.beginPath();
         let endDeg = d - 90
         cxt.arc(0,0,r,-90*deg,endDeg*deg);
         cxt.strokeStyle = 'orange';
         cxt.lineWidth = 5;
         cxt.stroke();
        }
        arc(this.props.radian/100 * 360)
        
     }
    render () {
        return (<canvas id={`can${this.props.id}`} width='60px' height='60px'></canvas>)
    }
}
export default Canvas