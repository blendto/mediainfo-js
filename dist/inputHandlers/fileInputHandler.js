"use strict";
exports.__esModule = true;
exports.FileInputHandler = void 0;
var fs_1 = require("fs");
var errors_1 = require("../errors");
var FileInputHandler = /** @class */ (function () {
    function FileInputHandler() {
    }
    FileInputHandler.prototype.openStream = function (input) {
        try {
            var stream = (0, fs_1.createReadStream)(input);
            if (stream.errored) {
                throw stream.errored;
            }
            return stream;
        }
        catch (err) {
            throw new errors_1.MediaInfoInputError('Could not open read stream to the file', input, err);
        }
    };
    return FileInputHandler;
}());
exports.FileInputHandler = FileInputHandler;
