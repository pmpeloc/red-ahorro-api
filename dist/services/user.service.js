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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const user_repository_1 = require("../repositories/user.repository");
const createToken_1 = require("../utils/createToken");
const errors_class_1 = require("./errors.class");
const createUser = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, user_repository_1.findUserByEmail)(newUser.email);
    if (userFound) {
        throw new errors_class_1.UserAlreadyExists();
    }
    yield (0, user_repository_1.saveUser)(newUser);
});
exports.createUser = createUser;
const loginUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, user_repository_1.findUserByEmail)(user.email);
    if (!userFound) {
        throw new errors_class_1.UserNotExists();
    }
    const matchPassword = yield userFound.comparePassword(user.password);
    if (matchPassword) {
        return (0, createToken_1.createToken)(userFound);
    }
    throw new errors_class_1.UserInvalidCredentials();
});
exports.loginUser = loginUser;
