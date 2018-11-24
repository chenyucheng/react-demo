import React from 'react';
import ReactDOM from 'react-dom';

//函数组件  没有生命周期，没有this 没有状态，传值 用 参数 props  获取 标签上的 属性
function Clock(props) { 
    return <h1>当前时间是 {props.date}</h1>
}
setInterval(()=>{
    ReactDOM.render(<Clock date={new Date().toLocaleString()}></Clock>,window.root)
},1000)
