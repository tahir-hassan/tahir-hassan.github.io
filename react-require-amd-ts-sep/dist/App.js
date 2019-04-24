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
define(["require", "exports", "react", "./Hello"], function (require, exports, React, Hello_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                title: 'My App',
                helloMessage: 'Hello, React Require AMD (tsx)!!!'
            };
            return _this;
        }
        App.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement("h1", { style: { backgroundColor: 'grey', border: '1px solid red' } }, this.state.title),
                React.createElement(Hello_1.default, { message: this.state.helloMessage })));
        };
        return App;
    }(React.Component));
    exports.default = App;
});
