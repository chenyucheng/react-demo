import React from 'react';
import Item from './item'

export default class Right extends React.Component {

    render() {
        return (<ul>
            {this.props.list.map((item, key) => {
                return <Item list={item} key={key} fn={this.props.fn}></Item>
            })}
        </ul>)
    }
}