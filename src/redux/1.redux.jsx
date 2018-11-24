



function createStore(reducer) {
    let state;
    let listeners=[];
    let getState = () => state;
    // 派发操作 
    let dispatch = (action) => {
        // 管理者 
        state = reducer(state, action)
        listeners.forEach(fn=>fn())
    }
    // 订阅 
    let subscribe=(fn)=>{
        listeners.push(fn);
        // 返回 取消订阅函数
        return ()=>{
            listeners=listeners.filter(l=>l!=fn)
        }
    }
    // 初始化 数据
    dispatch({ type: "@INIT" })
    return {
        subscribe,
        dispatch,
        getState
    }
}

let initState = {
    title: {
        content: '标题', color: 'pink'
    }
}
// 订阅管理者 
function reducer(state = initState, action) {
    switch (action.type) {
        case "CHANGE_TITLE":
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
})
setTimeout(() => {
    // 派发事件 
    store.dispatch({ type: "CHANGE_TITLE", color: '#ccc' })
    render()
}, 1000)


function render() {
    window.title.innerHTML = store.getState().title.content;
    window.title.style.backgroundColor = store.getState().title.color;

}

render();