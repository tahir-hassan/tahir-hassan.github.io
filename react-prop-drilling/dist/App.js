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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "./Todos", "./Welcome"], function (require, exports, React, Todos_1, Welcome_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    Todos_1 = __importDefault(Todos_1);
    Welcome_1 = __importDefault(Welcome_1);
    var App = /** @class */ (function (_super) {
        __extends(App, _super);
        function App() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
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
            };
            _this.markComplete = function (id) {
                _this.state.todos.filter(function (x) { return x.id === id; }).forEach(function (x) { x.completed = !x.completed; });
                _this.setState(_this.state);
            };
            _this.deleteItem = function (id) {
                var todos = _this.state.todos.filter(function (x) { return x.id !== id; });
                _this.setState({ todos: todos });
            };
            return _this;
        }
        App.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Welcome_1.default, { namer: "Tahir Hassaneroo" }),
                React.createElement(Todos_1.default, { todos: this.state.todos, markComplete: this.markComplete, deleteItem: this.deleteItem })));
        };
        return App;
    }(React.Component));
    exports.default = App;
});
