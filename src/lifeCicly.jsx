import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component{
    render(){
        return <div>
            我是子组件的{this.props.count}
        </div>
    }
    componentWillMount(){
        console.log('Child componentWillMount')
    }
     // 组件 接受父组件传递的参数， 将要更新 参数 是新属性
     componentWillReceiveProps(newProps){
        console.log('Child componentWillReceiveProps' , JSON.stringify(newProps))
    }
}

class Parent extends React.Component{
    static defaultProps={
        name:'cyc',
    }
    // state={
    //     count:0
    // }
    constructor(props){
        super();
        console.log('Parent constructor')
        this.state={
            count:0
        }
    }
    // 组件 将要挂载  16.3 如果使用新的api 已经不采取使用了
    componentWillMount(){
        console.log('Parent componentWillMount');
    }
    handleClick=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        console.log('Parent render')
        return <div>
            生命周期 {this.state.count}<br/><br/>
            <Child count={this.state.count}></Child><br/><br/>
            <button onClick={this.handleClick}>add</button>
        </div>
    }
    // 组件 挂载完成  执行 ajax 
    // 生命周期都是同步执行的 但是ajax 是异步的  一定会更新两次的
    componentDidMount(){
        console.log('Parent componentDidMount');
    }

    // 是否需要更新 
    shouldComponentUpdate(nextProps,nextStates){
        //因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，因此需要在子组件的该生命周期中做判断
        console.log('Parent shouldComponentUpdate',JSON.stringify(nextProps),JSON.stringify(nextStates));
        return true;
    }
    // 组件 将要更新 
    componentWillUpdate(nextProps,nextStates){
        console.log('Parent componentWillUpdate',JSON.stringify(nextProps),JSON.stringify(nextStates))
    }
    // 组件更新完成 
    componentDidUpdate(prevProps,prevState){
        console.log('Parent componentDidUpdate',JSON.stringify(prevProps),JSON.stringify(prevState))
    }
    // 将要 卸载 组件 触发
    componentWillUnmount(){
        console.log('Parent componentWillUnmount')
    }

}
ReactDOM.render(<Parent></Parent>,window.root)