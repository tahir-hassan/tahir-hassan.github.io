import * as React from "react";
import Hello from './Hello';

export default class App extends React.Component {
    state = {
        title: 'My App', 
        helloMessage: 'Hello, React Require AMD (tsx)!!!'
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <Hello message={this.state.helloMessage} />
            </div>
        );
    }
}