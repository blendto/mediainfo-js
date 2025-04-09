"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MediaInfoInputError = exports.MediaInfoError = void 0;
var MediaInfoError = /** @class */ (function (_super) {
    __extends(MediaInfoError, _super);
    function MediaInfoError(message, higherOrderError) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.higherOrderError = higherOrderError;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return MediaInfoError;
}(Error));
exports.MediaInfoError = MediaInfoError;
var MediaInfoInputError = /** @class */ (function (_super) {
    __extends(MediaInfoInputError, _super);
    function MediaInfoInputError(message, input, higherOrderError) {
        if (higherOrderError === void 0) { higherOrderError = undefined; }
        var _this = _super.call(this, message, higherOrderError) || this;
        _this.message = message;
        _this.input = input;
        _this.higherOrderError = higherOrderError;
        return _this;
    }
    return MediaInfoInputError;
}(MediaInfoError));
exports.MediaInfoInputError = MediaInfoInputError;
