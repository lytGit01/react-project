import React, {Component} from 'react'
import '../../static/css/swiper.css'
import '../../static/js/swiper.min.js'
import './swiper.scss'
import Swiper from 'swiper'
class Swipers extends Component {
    componentDidMount () {
        
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            }
          })        
    }
    render () {
        return (
            <div className='swiper-container' ref='swiper'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'><img src='/src/static/images/1.jpg' alt='error' /></div>
                    <div className='swiper-slide'><img src='/src/static/images/2.jpg' alt='error' /></div>
                    <div className='swiper-slide'><img src='/src/static/images/3.jpg' alt='error' /></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        )
    }
}

export default Swipers