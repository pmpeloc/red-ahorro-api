"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExist = void 0;
const types_1 = require("../controllers/types");
class UserAlreadyExist {
    constructor() {
        this.name = 'UserAlreadyExist';
        this.message = types_1.UserErrorMessages.ALREADY_EXISTS;
        this.code = types_1.UserErrorCodes.ALREADY_EXISTS;
    }
}
exports.UserAlreadyExist = UserAlreadyExist;
