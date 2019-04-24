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
define(["require", "exports", "react", "./TodoItem"], function (require, exports, React, TodoItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    TodoItem_1 = __importDefault(TodoItem_1);
    var Todos = /** @class */ (function (_super) {
        __extends(Todos, _super);
        function Todos() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Todos.prototype.render = function () {
            var _this = this;
            var items = this.props.todos.map(function (todo) { return (React.createElement(TodoItem_1.default, { key: todo.id, todo: todo, markComplete: function () { return _this.props.markComplete(todo.id); }, deleteItem: function () { return _this.props.deleteItem(todo.id); } })); });
            return React.createElement("div", null, items);
        };
        return Todos;
    }(React.Component));
    exports.default = Todos;
});
