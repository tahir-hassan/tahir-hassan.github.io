import * as React from 'react';
import TodoItemDto from './ITodoItemDto';

interface ITodoItemProps {
    todo: TodoItemDto;
    markComplete: () => void;
}

export default class TodoItem extends React.Component<ITodoItemProps> {

    getTitleStyle() : React.CSSProperties {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : ''
        };
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div>
                <input type="checkbox" onChange={this.props.markComplete} />
                <span style={this.getTitleStyle()}>{title}</span>
            </div>
        );
    }
}