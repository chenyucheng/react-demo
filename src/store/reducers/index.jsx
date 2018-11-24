import {combineReducers} from 'redux'
import counter from './counter'
import todo from './todo'


// {counter:{number:0},todo:[]}

// 传进一个 reducers  
// function combineReducers(reducers){
//     return (state={},atcion)=>{
//         let obj={};
//         for(let key in reducers){
//             obj[key]=reducers[key](state[key],atcion)
//         }
//         return obj;
//     }
// }

export default combineReducers({
    counter,
    todo
})