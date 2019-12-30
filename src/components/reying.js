import React from 'react'
import '../components/reying.css'
class Reying extends React.Component {
    constructor() {
        super()
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        this.axios({
            url:'https://douban.uieee.com/v2/movie/in_theaters?start=0&count=10'
        }).then(res=>{
            console.log(res,'列表数据')
            this.setState({
                result:res.data.subjects
            })
        }).catch(err=>{

        })
    }
    godetail(id){
        console.log(id,'id111111');        
         this.props.history.push({
            pathname:'/detail',
            state:{
                id,     
            }
        })
    }
    render() {
        let result =this.state.result.map((item,index)=>{
                return <ul  key={item.id}>
                <li onClick={this.godetail.bind(this,item.id)}><img  src={item.images.small}   />
                    <div className='img_message'>
                        <span>{item.title}</span>
                        <i>{item.rating.average}</i>
                    </div>
                </li>
            </ul>
        })
     return(
         <div>
         {result}
         </div>
     )
    }
}
export default Reying
