import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class List extends Component {
    state={
        list:localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <ul>
                 {this.state.list.map((item,key)=>{
                    console.log(item.id)
                     return <li key={key}> <Link to={'/user/detail/'+item.id}>{item.name}</Link></li>
                 })}
                </ul>
            </div>
        );
    }
}

export default List;