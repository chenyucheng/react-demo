import React from 'react';
import ReactDOM from 'react-dom';
// 非受控组件 无须state 可以配合 第三方插件 使用。
class From extends React.Component{
    password=React.createRef()
    handleClick=(e)=>{
        console.log(this.password.current.value)
        console.log(this.username.value)
        e.preventDefault();
    }
    render(){
        return (
            <div>
                <form>
                    <input name="username" ref={(dom)=>{this.username=dom}}></input>
                    <input name="password" ref={this.password}></input>
                    <button onClick={this.handleClick}>提交</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<From/>,window.root)