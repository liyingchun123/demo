import React from 'react'
import '../components/shangying.css'
class Shangying extends React.Component {
    constructor() {
        super()
        this.state = {
            result: []
        }
    }
    componentDidMount() {
        this.axios({
            url: 'https://douban.uieee.com/v2/movie/coming_soon'
        }).then(res => {
            console.log(res, '列表数据')
            this.setState({
                result: res.data.subjects
            })
        }).catch(err => {

        })
    }
    render() {
        let result = this.state.result.map((item, index) => {
            return <ul key={item.id}>
                <li ><img src={item.images.small} alt="" />
                    <div className='img_message'>
                        <span>{item.title}</span>
                        <i>{item.collect_count}想看</i>
                        <div className='date'>12月31日</div>
                    </div>
                </li>
            </ul>
        })
        return (
            <div>
                {result}
            </div>
        )
    }
}
export default Shangying
