import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router,Link,Route,Switch,NavLink} from 'react-router-dom';
import Home from './router/Home'
import Profile from './router/Profile'
import User from './router/User'
import Login from './router/Login'
import Private from './router/Private'
import MenuLink from './router/MenuLink'

import 'bootstrap/dist/css/bootstrap.css'
class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <div className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand">react router</a>
                            </div>
                            <ul className="navbar-nav nav">
                                {/* <li><NavLink exact to="/">首页</NavLink></li>
                                <li><NavLink to="/profile">个人中心</NavLink></li>
                                <li><NavLink to="/user">用户</NavLink></li>
                                <li><NavLink to="/login">登陆</NavLink></li> */}
                                <MenuLink exact to="/">首页</MenuLink>
                                <MenuLink to="/profile">个人中心</MenuLink>
                                <MenuLink to="/user">用户</MenuLink>
                                <MenuLink to="/login">登陆</MenuLink>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <Switch>
                            <Route path='/' exact={true} component={Home}></Route>
                            {/* <Route path='/ ' component={Profile}></Route> */}
                            <Private path='/profile' component={Profile}></Private>
                            <Route path='/user' component={User}></Route>
                            <Route path='/login' component={Login}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render((
    <App></App>
),window.root)