"use strict";
exports.__esModule = true;
exports.InputHandlerFactory = void 0;
var fileInputHandler_1 = require("./fileInputHandler");
var httpInputHandler_1 = require("./httpInputHandler");
var InputHandlerFactory = /** @class */ (function () {
    function InputHandlerFactory() {
    }
    InputHandlerFactory.createInputHandler = function (input) {
        if (input.toLowerCase().startsWith('http')) {
            return new httpInputHandler_1.HttpInputHandler();
        }
        else {
            return new fileInputHandler_1.FileInputHandler();
        }
    };
    return InputHandlerFactory;
}());
exports.InputHandlerFactory = InputHandlerFactory;
