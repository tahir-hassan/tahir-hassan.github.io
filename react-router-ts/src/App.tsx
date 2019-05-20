// import * as Config from './requireConfig';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { observer } from 'mobx-react';

import Navigation from './Navigation';

class Home extends React.Component {
    state = { todos : [ { key : 1, title: 'tahir' }, { key : 2, title: 'riyadh' } ] };

    componentDidMount() {
        console.log('componentDidMount');
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }));
    }

    render() {
        var items = this.state.todos.map((todo: any) => (
            <p>{todo.title}</p>
        ));

        return (
            <div>{items}</div>
        )
    }
}

function About() {
    return <p>This is About</p>
}

function Contact() {
    return <p>This is contact</p>
}

function Error() {
    return <p>This is error</p>
}

class App extends React.Component {
    formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                    <div>
                        <form onSubmit={this.formSubmit}>

                        </form>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

