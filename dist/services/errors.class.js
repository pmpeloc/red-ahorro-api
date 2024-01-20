"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInvalidCredentials = exports.UserNotExists = exports.UserAlreadyExists = void 0;
const types_1 = require("../controllers/types");
class UserAlreadyExists {
    constructor() {
        this.name = 'UserAlreadyExists';
        this.message = types_1.responseMessageMapper[types_1.ResponseCodes.USER_ALREADY_EXISTS];
        this.code = types_1.ResponseCodes.USER_ALREADY_EXISTS;
    }
}
exports.UserAlreadyExists = UserAlreadyExists;
class UserNotExists {
    constructor() {
        this.name = 'UserNotExists';
        this.message = types_1.responseMessageMapper[types_1.ResponseCodes.USER_NOT_EXISTS];
        this.code = types_1.ResponseCodes.USER_NOT_EXISTS;
    }
}
exports.UserNotExists = UserNotExists;
class UserInvalidCredentials {
    constructor() {
        this.name = 'UserInvalidCredentials';
        this.message = types_1.responseMessageMapper[types_1.ResponseCodes.USER_INVALID_CREDENTIALS];
        this.code = types_1.ResponseCodes.USER_INVALID_CREDENTIALS;
    }
}
exports.UserInvalidCredentials = UserInvalidCredentials;
