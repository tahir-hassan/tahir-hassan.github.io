// import * as Config from './requireConfig';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function Navigation() {
    return <p>This is nav</p>
}

function Home() {
    return <p>This is home</p>
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
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

