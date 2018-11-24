// import  './redux/3.react_redux'


import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter';
import Todo from './components/Todo';
import Test from './components/Test';

import store from './store'
// react-redux 主要是把 react 和redux 进行链接的一个库
// 在父级需要提供store 这样在每个组件中就可以不用引入store了
// Provider != ContextApi Provider
import {Provider} from 'react-redux'


ReactDOM.render((
    <Provider store={store}>
    <>
        <Counter />
        <Todo/>
        <Test>
            <p>1111</p>
            <p>1111</p>
            <p>1111</p>
        </Test>
    </>
    </Provider>
) ,window.root)
