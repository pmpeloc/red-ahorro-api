"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSuccessMessages = exports.UserSuccessCodes = exports.UserErrorMessages = exports.UserErrorCodes = void 0;
var UserErrorCodes;
(function (UserErrorCodes) {
    UserErrorCodes["EMPTY"] = "EMPTY";
    UserErrorCodes["ALREADY_EXISTS"] = "ALREADY_EXISTS";
})(UserErrorCodes || (exports.UserErrorCodes = UserErrorCodes = {}));
var UserErrorMessages;
(function (UserErrorMessages) {
    UserErrorMessages["EMPTY"] = "Please, send your email and password";
    UserErrorMessages["ALREADY_EXISTS"] = "The user already exists";
})(UserErrorMessages || (exports.UserErrorMessages = UserErrorMessages = {}));
var UserSuccessCodes;
(function (UserSuccessCodes) {
    UserSuccessCodes["NEW_USER"] = "NEW_USER";
})(UserSuccessCodes || (exports.UserSuccessCodes = UserSuccessCodes = {}));
var UserSuccessMessages;
(function (UserSuccessMessages) {
    UserSuccessMessages["NEW_USER"] = "New user saved successfully";
})(UserSuccessMessages || (exports.UserSuccessMessages = UserSuccessMessages = {}));
