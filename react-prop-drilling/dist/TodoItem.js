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
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    React = __importStar(React);
    var TodoItem = /** @class */ (function (_super) {
        __extends(TodoItem, _super);
        function TodoItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TodoItem.prototype.getTitleStyle = function () {
            return {
                textDecoration: this.props.todo.completed ? 'line-through' : ''
            };
        };
        TodoItem.prototype.render = function () {
            var _a = this.props.todo, id = _a.id, title = _a.title;
            return (React.createElement("div", null,
                React.createElement("input", { type: "checkbox", onChange: this.props.markComplete }),
                React.createElement("span", { style: this.getTitleStyle() }, title),
                React.createElement("button", { onClick: this.props.deleteItem }, "Delete")));
        };
        return TodoItem;
    }(React.Component));
    exports.default = TodoItem;
});
