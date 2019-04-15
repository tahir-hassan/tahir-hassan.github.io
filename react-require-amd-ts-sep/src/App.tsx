import * as React from "react";
import Hello from './Hello';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <Hello />
            </div>
        );
    }
}