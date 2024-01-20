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
const types_1 = require("./types");
const user_service_1 = require("../services/user.service");
const types_2 = require("../services/types");
const genericErrors_1 = require("../types/genericErrors");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email && !password) {
        return res
            .status(400)
            .json({ code: types_1.UserErrorCodes.EMPTY, message: types_1.UserErrorMessages.EMPTY });
    }
    try {
        yield (0, user_service_1.createUser)({ email, password });
        return res.status(201).json({
            code: types_1.UserSuccessCodes.NEW_USER,
            message: types_1.UserSuccessMessages.NEW_USER,
        });
    }
    catch (e) {
        if (e instanceof types_2.UserAlreadyExist) {
            return res.status(400).json({
                code: types_1.UserErrorCodes.ALREADY_EXISTS,
                message: types_1.UserErrorMessages.ALREADY_EXISTS,
            });
        }
        if (e instanceof Error) {
            return res.status(500).json({
                code: genericErrors_1.GenericErrorsCode.ERROR_500,
                message: genericErrors_1.GenericErrorsMessages.ERROR_500,
                stackMessage: e.message,
            });
        }
    }
});
exports.signup = signup;
const signin = (req, res) => {
    res.send('signin');
};
exports.signin = signin;
