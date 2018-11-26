import React from 'react';
import {Route,Redirect} from 'react-router-dom'
// 高阶 组件 
function Private ({component:Component,...rest}){
    return (
    <Route {...rest} render={(props)=>{
        // render 函数  {...props } 传给 Component 可以拥有 history location match等方法
        return localStorage.getItem('login')?<Component {...props}/>:<Redirect to="/login"/>
    }} />
    )
}

export default Private;