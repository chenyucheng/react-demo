import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div>
                用户ID{this.props.match.params.id}
            </div>
        );
    }
}

export default Detail;