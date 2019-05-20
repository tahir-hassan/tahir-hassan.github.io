var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "react", "react-router-dom", "axios", "./Navigation"], function (require, exports, React, react_router_dom_1, axios_1, Navigation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = /** @class */ (function (_super) {
        __extends(Home, _super);
        function Home() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { todos: [{ key: 1, title: 'tahir' }, { key: 2, title: 'riyadh' }] };
            return _this;
        }
        Home.prototype.componentDidMount = function () {
            var _this = this;
            console.log('componentDidMount');
            axios_1.default.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(function (res) { return _this.setState({ todos: res.data }); });
        };
        Home.prototype.render = function () {
            var items = this.state.todos.map(function (todo) { return (React.createElement("p", null, todo.title)); });
            return (React.createElement("div", null, items));
        };
        return Home;
    }(React.Component));
    function About() {
        return React.createElement("p", null, "This is About");
    }
    function Contact() {
        return React.createElement("p", null, "This is contact");
    }
    function Error() {
        return React.createElement("p", null, "This is error");
    }
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.formSubmit = function (e) {
            };
            return _this;
        }
        App.prototype.render = function () {
            return (React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement(Navigation_1.default, null),
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { path: "/", component: Home, exact: true }),
                        React.createElement(react_router_dom_1.Route, { path: "/about", component: About }),
                        React.createElement(react_router_dom_1.Route, { path: "/contact", component: Contact }),
                        React.createElement(react_router_dom_1.Route, { component: Error })),
                    React.createElement("div", null,
                        React.createElement("form", { onSubmit: this.formSubmit })))));
        };
        return App;
    }(React.Component));
    exports.default = App;
});
