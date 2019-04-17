import * as React from "react";
import IAppState from './IAppState';
import Todos from './Todos';

export default class App extends React.Component<{}, IAppState> {
    state = {
        todos: [
            {
                id: 1,
                title: 'Learn jQuery',
                completed: false
            },
            {
                id: 2,
                title: 'Learn React',
                completed: false
            },
            {
                id: 3,
                title: 'Learn Bootstrap',
                completed: false
            }
        ]
    }

    markComplete = (id: number) => {
        this.state.todos.filter((x) => x.id === id).forEach((x) => { x.completed = !x.completed });
        this.setState(this.state);
    }

    render() {
        return (
            <Todos todos={this.state.todos} markComplete={this.markComplete} />
        );
    }
}