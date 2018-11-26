import React, { Component } from 'react';

class Add extends Component {
    input=React.createRef()
    state={
        list:localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
    }
    componentWillMount(){
        console.log(this.state.list)
    }
    add=()=>{
        this.state.list.push({id:Math.random(),name:this.input.current.value})
        this.input.current.value='';
        localStorage.setItem("list",JSON.stringify(this.state.list));
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.input}/>
                <button onClick={this.add}>增加用户</button>
            </div>
        );
    }
}

export default Add;