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
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Hello = /** @class */ (function (_super) {
        __extends(Hello, _super);
        function Hello() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Hello.prototype.render = function () {
            return (React.createElement("p", null, "Hello, React Require AMD (tsx)!!"));
        };
        return Hello;
    }(React.Component));
    exports.default = Hello;
});
