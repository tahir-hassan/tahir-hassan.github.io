define(["require", "exports", "react", "react-router-dom"], function (require, exports, React, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Navigation() {
        return (React.createElement("div", null,
            React.createElement(react_router_dom_1.NavLink, { to: "/" }, "Home"),
            " |",
            React.createElement(react_router_dom_1.NavLink, { to: "/contact" }, "Contact"),
            " |",
            React.createElement(react_router_dom_1.NavLink, { to: "/about" }, "About")));
    }
    exports.default = Navigation;
});
