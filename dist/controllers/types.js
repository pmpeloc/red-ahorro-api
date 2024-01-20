"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseMessageMapper = exports.ResponseCodes = void 0;
var ResponseCodes;
(function (ResponseCodes) {
    ResponseCodes["USER_NEW"] = "USER_NEW";
    ResponseCodes["USER_LOGIN"] = "USER_LOGIN";
    ResponseCodes["USER_EMPTY"] = "USER_EMPTY";
    ResponseCodes["USER_ALREADY_EXISTS"] = "USER_ALREADY_EXISTS";
    ResponseCodes["USER_NOT_EXISTS"] = "USER_NOT_EXISTS";
    ResponseCodes["USER_INVALID_CREDENTIALS"] = "USER_INVALID_CREDENTIALS";
})(ResponseCodes || (exports.ResponseCodes = ResponseCodes = {}));
exports.responseMessageMapper = {
    [ResponseCodes.USER_NEW]: 'New user saved successfully',
    [ResponseCodes.USER_LOGIN]: 'User login successfully',
    [ResponseCodes.USER_EMPTY]: 'Please, send your email and password',
    [ResponseCodes.USER_ALREADY_EXISTS]: 'The user already exists',
    [ResponseCodes.USER_NOT_EXISTS]: 'The user not exists',
    [ResponseCodes.USER_INVALID_CREDENTIALS]: 'The email or password are incorrect',
};
