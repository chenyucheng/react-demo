import React from 'react';
export default class Box extends React.Component {
    render() {
        return (<div>
            点赞总量：{this.props.total}
        </div>)
    }
}


