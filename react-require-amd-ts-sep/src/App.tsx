import * as React from "react";
import Hello from './Hello';

export default class App extends React.Component {
    state = {
        title: 'My App', 
        helloMessage: 'Hello, React Require AMD (tsx)!!!'
    };

    props = {
        team: 'mercury'
    }

    render() {
        return (
            <div>
                <h1>{this.props.team}</h1>
                <h1 style={{ backgroundColor: 'grey', border: '1px solid red' }}>{this.state.title}</h1>
                <Hello message={this.state.helloMessage} />
            </div>
        );
    }
}