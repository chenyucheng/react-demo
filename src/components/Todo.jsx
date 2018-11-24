import React, { Component } from 'react';
// import store from '../store';
import actions from '../store/actions/todo'

import {connect} from 'react-redux'

class Todo extends Component {
    input=React.createRef()
    
    addClick=()=>{
        this.props.add_todo(this.input.current.value)
        this.input.current.value='';
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.input} /> 
                <button onClick={this.addClick}>增加</button>
                <ul>
                    {this.props.todos.map((item,key)=>(
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{ // store.getState()
    return {
        todos:state.todo
    }
}
let mapDispatchToProps=(dispatch)=>{ // store.dispatch()
    return {
        add_todo:(todo)=>{dispatch(actions.add_todo(todo))}
    }
}

export default connect((state)=>({todos:state.todo}),mapDispatchToProps)(Todo);