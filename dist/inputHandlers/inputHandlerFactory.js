"use strict";
exports.__esModule = true;
exports.InputHandlerFactory = void 0;
var bufferInputHandler_1 = require("./bufferInputHandler");
var fileInputHandler_1 = require("./fileInputHandler");
var httpInputHandler_1 = require("./httpInputHandler");
var streamInputHandler_1 = require("./streamInputHandler");
var stream_1 = require("stream");
var InputHandlerFactory = /** @class */ (function () {
    function InputHandlerFactory() {
    }
    InputHandlerFactory.createInputHandler = function (input) {
        if (input instanceof stream_1.Stream) {
            return new streamInputHandler_1.StreamInputHandler();
        }
        else if (Buffer.isBuffer(input)) {
            return new bufferInputHandler_1.BufferInputHandler();
        }
        else if (typeof input === 'string' && input.toLowerCase().startsWith('http')) {
            return new httpInputHandler_1.HttpInputHandler();
        }
        else {
            return new fileInputHandler_1.FileInputHandler();
        }
    };
    return InputHandlerFactory;
}());
exports.InputHandlerFactory = InputHandlerFactory;
