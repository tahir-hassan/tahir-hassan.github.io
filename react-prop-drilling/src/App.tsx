import * as React from "react";
import IAppState from './IAppState';
import Todos from './Todos';
import Welcome from './Welcome';

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

    deleteItem = (id: number) => {
        var todos = this.state.todos.filter((x) => x.id !== id);
        this.setState({ todos: todos });
    }

    render() {
        return (
            <div>
                <Welcome namer="Tahir Hassaneroo" />
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
            </div>
        );
    }
}