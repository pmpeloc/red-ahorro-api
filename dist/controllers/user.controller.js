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
exports.signin = exports.signup = void 0;
const user_service_1 = require("../services/user.service");
const types_1 = require("./types");
const error_handler_1 = require("../handlers/error.handler");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    emptyUserHelper(email, password, res);
    try {
        yield (0, user_service_1.createUser)({ email, password });
        return res.status(201).json({
            code: types_1.ResponseCodes.USER_NEW,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_NEW],
        });
    }
    catch (e) {
        return (0, error_handler_1.errorHandler)(res, e);
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    emptyUserHelper(email, password, res);
    try {
        const token = yield (0, user_service_1.loginUser)({ email, password });
        return res.status(200).json({
            code: types_1.ResponseCodes.USER_LOGIN,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_LOGIN],
            data: { token },
        });
    }
    catch (e) {
        return (0, error_handler_1.errorHandler)(res, e);
    }
});
exports.signin = signin;
const emptyUserHelper = (email, password, res) => {
    if (!email && !password) {
        return res.status(400).json({
            code: types_1.ResponseCodes.USER_EMPTY,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_EMPTY],
        });
    }
};
