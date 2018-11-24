import React from 'react';
import ReactDOM from 'react-dom';
import Left from './left';
import Right from './right';
import axios from 'axios';
import { Provider } from './content';

class Box extends React.Component {
    state = {
        total: 0,
        list: []
    }
    addHandle = () => {
        this.setState({
            total: this.state.total + 5
        })
    }
    async componentDidMount() {
        let { data } = await axios.get('/list.json');
        this.setState({
            list: data.data
        })
    }
    reset = () => {
        this.setState({
            total: 0
        })
    }
    render() {
        return (
            <Provider value={{ r: this.reset }}>
                <div>
                    <div>
                        <Right list={this.state.list} fn={this.addHandle}></Right>
                    </div>
                    <div>
                        <Left total={this.state.total}></Left>
                    </div>
                </div>
            </Provider>
        )
    }
}

ReactDOM.render(<Box></Box>, window.root)