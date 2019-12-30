import React from 'react'
import './detail.css'
class Detail extends React.Component {
    render() {
        console.log(this.props, 'ccccccccccccccccc')
        return (
            <div>
          
                <div className='box'>
                    <div className='header'>
                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2576090251.webp" alt="" />
                        <div className='mes'>
                            <h2>误杀</h2>
                            <span>误杀（2019）</span>
                            <i>
                                中国大陆 / 剧情 / 犯罪 / 悬疑 / 2019-12-13(中国大陆)上映 / 片长112分钟
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail