import * as React from "react";
import TodoItem from './TodoItem';
import ITodoItemDto from './ITodoItemDto';

interface ITodosProps {
    todos: ITodoItemDto[];
    markComplete: (id: number) => void;
}

export default class Todos extends React.Component<ITodosProps> {
    render() {
        var items = this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={() => this.props.markComplete(todo.id)} />
        ));

        return <div>{items}</div>;
    }
}