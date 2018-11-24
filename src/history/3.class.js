import React from 'react';
import ReactDOM from 'react-dom';
//  组件 首字母必须大写

// //函数组件 没有生命周期，没有this 没有状态，传值 用 参数 props  获取 标签上的 属性
// function Clock(props) { 
//     return <h1>当前时间是 {props.date}</h1>
// }
// setInterval(()=>{
//     ReactDOM.render(<Clock date={new Date().toLocaleString()}></Clock>,window.root)
// },1000)
//  类 组件  生命周期 钩子函数 setState 父类提供
class Clock extends React.Component{
    //es6 
    constructor(props){
        //props  传入的属性只读。想改 可以 存到 自己得 state 上 
        console.log(props.p)
        super()
        this.state={
            date:new Date().toLocaleString()
        }
    }
    //es7  props 直接在 this上 挂载 console.log(this.props.p)
    // state={
    //     date:new Date().toLocaleString()
    // }
    // 元素挂载后 钩子函数
    componentDidMount(){
        this.timer=setInterval(()=>{
            // Component 提供的函数
            this.setState({
                date:new Date().toLocaleString()
            })
        },1000)
    }
    // 元素即将卸载前
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    // es7 获取this 
    remove=()=>{
        // return;
        //this 是当前Clock
        console.log(this); 
        // 卸载某个元素 
        ReactDOM.unmountComponentAtNode(window.root);
    }
    doubleClick(){
        console.log(this);
    }
    // class 组件 自己实现 render 函数 
    render(){
        return <h1>当前时间是{this.state.date}<button onDoubleClick={this.doubleClick.bind(this)} onClick={this.remove}>删除</button></h1>
    }
}

ReactDOM.render(<Clock p='1'></Clock>,window.root)