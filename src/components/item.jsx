import React from 'react';
import { Consumer } from './content'

export default class Item extends React.Component {
    render() {
        let { title } = this.props.list;
        return (
            <Consumer>
                {({r}) => {
                   return <li>
                        <h3>{title}</h3>
                        <button onClick={this.props.fn}>点赞</button><br />
                        <button onClick={()=>{
                            r()
                        }}>取消</button>
                    </li>
                }}
            </Consumer>
        )
    }
}