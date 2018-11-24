import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import {createStore} from 'redux'

/**
 * 
 * @param {管理者} reducer 
 */
function createStore(reducer){
    let state;
    let listners=[];//监听数组
    let getState=()=>state;// 获取state
    // 派发函数 接受 action 
    let dispatch=(action)=>{
        state=reducer(state,action);
        // 触发监听函数
        listners.forEach(fn=>fn())
    }
    // 初始化 state
    dispatch({type:"@INIT"});
    // 监听 函数 方法返回一个函数，调用这个函数就可以解除监听。
    let subscribe=(fn)=>{
        listners.push(fn);
        // 返回 
        return ()=>{
            listners=listners.filter(l=>fn!=l)
        }
    }
    return {
        subscribe,
        getState,
        dispatch
    }
}
let initState = {
    title: {
        content: '标题', color: 'pink'
    }
}


// action type   可以创建一个 action 的函数 
let ADD="ADD";

// Reducer  可以拆分  combineReducers
// import { combineReducers } from 'redux';
// const chatReducer = combineReducers({
//   chatLog,
//   statusMessage,
//   userName
// })
// export default todoApp;
function reducer(state={count:0},action){
    switch (action.type) {
        case ADD:
            return {count:state.count+action.v}
            break;
        default:
            return state
            break;
    }
}
let store=createStore(reducer);

class Count extends Component {
    constructor(){
        super();
        store.subscribe(()=>{
            this.setState({
                count:store.getState().count
            })
        })
    }
    state={
        count:store.getState().count
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={()=>{
                    store.dispatch({type:ADD,v:1})
                }}>add</button>
            </div>
        );
    }
}

ReactDOM.render(<Count></Count>,window.root)