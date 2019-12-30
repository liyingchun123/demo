//这里面定义的是 二级路由
import Reying from '../components/reying'
import Shangying from '../components/shangying'
const Two = [
    {
        path:'/index/reying',
        component:Reying
    },
    {
        path:'/index/shangying',
        component:Shangying
    },
    {
        path:'*',
        redirect:'/index/reying'
    },
]
export default Two