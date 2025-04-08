"use strict";
exports.__esModule = true;
exports.BufferInputHandler = void 0;
var errors_1 = require("../errors");
var stream_1 = require("stream");
var BufferInputHandler = /** @class */ (function () {
    function BufferInputHandler() {
    }
    BufferInputHandler.prototype.openStream = function (input) {
        try {
            var stream = stream_1.Readable.from(input);
            if (stream.errored) {
                throw stream.errored;
            }
            return stream;
        }
        catch (err) {
            throw new errors_1.MediaInfoInputError('Could not open buffer for read stream', input, err);
        }
    };
    return BufferInputHandler;
}());
exports.BufferInputHandler = BufferInputHandler;
