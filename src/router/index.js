import React from "react"
import {Route,Switch,Redirect} from 'react-router-dom'
function Router (props){
    return(
        <Switch>
            {
                props.routes.map((item,index)=>{
                    if(item.path==="*"){
                        return <Redirect key={index} to={item.redirect}></Redirect>
                       
                    }else{
                        return <Route key={item.path} path={item.path} component={item.component}></Route>
                    }                  
                })
            }
        </Switch>
    )
}
export default Router