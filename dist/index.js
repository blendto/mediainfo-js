"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MediaInfo = void 0;
var MediaInfoLib = require("../lib/MediaInfoWasm");
var errors_1 = require("./errors");
var inputHandlerFactory_1 = require("./inputHandlers/inputHandlerFactory");
var MediaInfo = /** @class */ (function () {
    function MediaInfo() {
    }
    MediaInfo.prototype.instantiateLib = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, MediaInfoLib({})];
                    case 1:
                        _a.lib = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        throw new errors_1.MediaInfoError('Failed to instantiate MediaInfoLib', e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MediaInfo.prototype.getInfo = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.lib) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.instantiateLib()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var normalizedInput = MediaInfo.normalizeInput(input);
                                MediaInfo.getDataStream(normalizedInput, reject)
                                    .then(function (stream) { return _this.getMediaInfoData(stream); })
                                    .then(resolve)["catch"](reject);
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        e_2 = _a.sent();
                        throw new errors_1.MediaInfoError('Failed to read media data', e_2);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MediaInfo.normalizeInput = function (input) {
        var normalizedInput;
        if (input instanceof URL) {
            normalizedInput = input.toString();
        }
        else {
            normalizedInput = input;
        }
        return normalizedInput;
    };
    MediaInfo.getDataStream = function (input, errorHandler) {
        return __awaiter(this, void 0, void 0, function () {
            var inputHandler, stream;
            return __generator(this, function (_a) {
                inputHandler = inputHandlerFactory_1.InputHandlerFactory.createInputHandler(input);
                stream = inputHandler.openStream(input);
                stream.on('error', errorHandler);
                return [2 /*return*/, stream];
            });
        });
    };
    MediaInfo.prototype.getMediaInfoData = function (stream) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var mediaInfoInstance;
            return __generator(this, function (_a) {
                mediaInfoInstance = new this.lib.MediaInfo();
                mediaInfoInstance.Open_Buffer_Init(-1, 0);
                stream.on('data', function (chunk) {
                    mediaInfoInstance.Open_Buffer_Continue(chunk);
                    mediaInfoInstance.Open_Buffer_Continue_Goto_Get();
                });
                stream.on('end', function () {
                    mediaInfoInstance.Open_Buffer_Finalize();
                    mediaInfoInstance.Option('Output', 'JSON');
                    mediaInfoInstance.Option('Complete');
                    var output = JSON.parse(mediaInfoInstance.Inform());
                    mediaInfoInstance.Close();
                    mediaInfoInstance["delete"]();
                    resolve(output);
                });
                return [2 /*return*/];
            });
        }); });
    };
    return MediaInfo;
}());
exports.MediaInfo = MediaInfo;
