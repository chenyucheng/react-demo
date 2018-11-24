
function createStore(reducer){
    let state;
    let listners=[];
    let getState=()=>state;
    let dispatch=(action)=>{
        state=reducer(state,action);
        listners.forEach(fn=>fn())
    }
    dispatch({type:"@INIT"});
    let subscribe=(fn)=>{
        listners.push(fn);
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
// action type 
let CHANGE_TITLE="CHANGE_TITLE";
// 订阅管理者 
function reducer(state = initState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return  { ...state, title: { ...state.title, color: action.color } }
            // return  {title:{ content: '内容', color: action.color }}
            break;
    }
    return state
}

let store = createStore(reducer);
// 订阅 
store.subscribe(()=>{
    console.log('更新了')
    // setState 更新 this.state
})
setTimeout(() => {
    // 派发事件 
    store.dispatch({ type: CHANGE_TITLE, color: '#ccc' })
    render()
}, 1000)


function render() {
    window.title.innerHTML = store.getState().title.content;
    window.title.style.backgroundColor = store.getState().title.color;

}

render();