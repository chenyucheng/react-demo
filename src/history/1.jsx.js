import React from 'react';
import ReactDOM from 'react-dom'
// 1) 如果渲染两个相邻的jsx元素 需要被外面的一个标签所包裹 <></>
// 2) 行内样式的写法, jsx为了识别是html还是js 需要用 < { 来区分
// 3) {} 表示的是写js  三元表达式，取值 ，(只要内容有返回值就可以显示)
// 4) 属性的名字有变化  htmlFor => for className=> class;
// 5) v-html 把内容当成html 插入到页面中
// 6) 注释只能写js注释
function fn (){return <h3>fn函数</h3>}
let str = '<img src="//s.fanghuwang.com/img/scan_icon.png">'
let arr = ['吃饭','喝水','睡觉'];
let isOK=false;
function list() { 
    return arr.map((item,key)=>{
        return <li key={key}>item</li>
    })
 }
let h1 = (
    <>
    <h1 style={{backgroundColor:'red'}}>hello</h1>
    <h2>ceshi</h2>
    <span>{fn()}</span>
    <span className="box">box  className</span>
    <label htmlFor="username">用户名</label>
    <input type="text" id="username"/>
    {/* 危险的html */}
    <div dangerouslySetInnerHTML={{__html:str}}></div>
    <ul>
        {/* 循环 */}
        {list()}
    </ul>
    {/* 判断 */}
    {isOK==true?<span>真</span>:<span>假</span>}
    </>
)
ReactDOM.render(h1,window.root)