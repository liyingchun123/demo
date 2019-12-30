import React from 'react'
import Router from '../router/index'
import Two from '../router/two'
import { NavLink } from 'react-router-dom'
import './index.css'
class Index extends React.Component {
    render() {
        return (
            <div className='douban'>
                <h1 className="title">豆瓣</h1>
                <div className='con'>
                    <div>
                        <NavLink to='/index/reying' activeClassName='select'>影院热映</NavLink>
                        <NavLink to='/index/shangying' activeClassName='select'>即将上映</NavLink>
                    </div>
                    <Router routes={Two}></Router>
                  
                </div>
            </div>
        )
    }
}
export default Index