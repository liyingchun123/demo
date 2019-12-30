//这里面定义的是 一级路由
import Index from '../components/index'
import Detail from '../components/detail'

const One = [
    {
        path:'/index',
        component:Index
    },
    {
        path:'/Detail',
        component:Detail
    },
    {
        path:'*',
        redirect:'/index'
    }
]
export default One