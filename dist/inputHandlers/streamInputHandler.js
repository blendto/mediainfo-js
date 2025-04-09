"use strict";
exports.__esModule = true;
exports.StreamInputHandler = void 0;
var errors_1 = require("../errors");
var StreamInputHandler = /** @class */ (function () {
    function StreamInputHandler() {
    }
    StreamInputHandler.prototype.openStream = function (input) {
        try {
            return input;
        }
        catch (err) {
            throw new errors_1.MediaInfoInputError('Could not open read stream to the file', input, err);
        }
    };
    return StreamInputHandler;
}());
exports.StreamInputHandler = StreamInputHandler;
