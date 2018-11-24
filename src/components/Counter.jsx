import React, { Component } from 'react';
import actions from '../store/actions/counter'
import { connect } from 'react-redux'

// import {bindActionCreators} from 'redux'

class Counter extends Component {
    // state = {
    //     number:store.getState().counter.number
    // }
    // componentWillMount(){
    //     this.unsub=store.subscribe(()=>{
    //         this.setState({
    //             number:store.getState().counter.number
    //         })
    //     })
    // }
    // componentWillUnmount(){
    //     this.unsub()
    // }
    clickHandle = () => {
        this.props.add(3)
    }
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.clickHandle}>增加</button>
            </div>
        );
    }
}


// let mapStateToProps=(state)=>{// store.getState()
//     return {
//         number:state.counter.number
//     }
// }
// let mapDispatchToProps=(dispatch)=>{//store.dispatch
//     return {
//         add:(n)=>{dispatch(actions.add(n))}
//     }
// }

let bindActionCreators = (actions, dispatch) => {
    let obj = {}
    for (let key in actions) {
        obj[key] = (...args) => dispatch(actions[key](...args))
    }
    return obj;
}

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);


// 如果connect 第一次执行的函数 ，如果第二个参数是对象类型 会自动内部调用bindActionCreator来实现
export default connect((state) => ({ ...state.counter }), actions)(Counter)