"use strict";
exports.__esModule = true;
exports.HttpInputHandler = void 0;
var got_1 = require("got");
var errors_1 = require("../errors");
var HttpInputHandler = /** @class */ (function () {
    function HttpInputHandler() {
    }
    HttpInputHandler.prototype.openStream = function (input) {
        try {
            var stream = got_1["default"].stream(input);
            if (stream.errored) {
                throw stream.errored;
            }
            return stream;
        }
        catch (err) {
            throw new errors_1.MediaInfoInputError('Could not open read stream from HTTP address', input, err);
        }
    };
    return HttpInputHandler;
}());
exports.HttpInputHandler = HttpInputHandler;
