import React from 'react';
import ReactDOM from 'react-dom';
// 受控组件  数据双向绑定，更新 state 的 值 
class From extends React.Component{
    state={
        username:'cyc',
        password:'123'
    }
    handleClick=(e)=>{
        console.log(JSON.stringify(this.state))
        e.preventDefault();
    }
    changeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return (
            <div>
                <form>
                    <input name="username" ></input>
                    <input name="password" onChange={this.changeValue} value={this.state.password} ></input>
                    <button onClick={this.handleClick}>提交</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<From/>,window.root)