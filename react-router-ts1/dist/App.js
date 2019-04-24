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
define(["require", "exports", "react", "react-router-dom"], function (require, exports, React, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Navigation() {
        return React.createElement("p", null, "This is nav");
    }
    function Home() {
        return React.createElement("p", null, "This is home");
    }
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
            return _super !== null && _super.apply(this, arguments) || this;
        }
        App.prototype.render = function () {
            return (React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement("div", null,
                    React.createElement(Navigation, null),
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { path: "/", component: Home, exact: true }),
                        React.createElement(react_router_dom_1.Route, { path: "/about", component: About }),
                        React.createElement(react_router_dom_1.Route, { path: "/contact", component: Contact }),
                        React.createElement(react_router_dom_1.Route, { component: Error })))));
        };
        return App;
    }(React.Component));
    exports.default = App;
});
