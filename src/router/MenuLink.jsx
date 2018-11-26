import React from 'react';
import {Link,Route} from 'react-router-dom'

function MenuLink(p){
    return <Route path={p.to} exact={p.exact} children={(props)=>{
        return <li className={props.match?'active':''}><Link to={p.to}>{p.children}</Link></li>
    }} ></Route>
}

export default MenuLink;
