"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const types_1 = require("../controllers/types");
const errors_class_1 = require("../services/errors.class");
const genericErrors_1 = require("../types/genericErrors");
const errorHandler = (res, error) => {
    if (error instanceof errors_class_1.UserAlreadyExists) {
        return res.status(400).json({
            code: types_1.ResponseCodes.USER_ALREADY_EXISTS,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_ALREADY_EXISTS],
        });
    }
    if (error instanceof errors_class_1.UserNotExists) {
        return res.status(400).json({
            code: types_1.ResponseCodes.USER_NOT_EXISTS,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_NOT_EXISTS],
        });
    }
    if (error instanceof errors_class_1.UserInvalidCredentials) {
        return res.status(400).json({
            code: types_1.ResponseCodes.USER_INVALID_CREDENTIALS,
            message: types_1.responseMessageMapper[types_1.ResponseCodes.USER_INVALID_CREDENTIALS],
        });
    }
    if (error instanceof Error) {
        return res.status(500).json({
            code: genericErrors_1.GenericErrorsCode.ERROR_500,
            message: genericErrors_1.GenericErrorsMessages.ERROR_500,
            errorStackMessage: error.message,
        });
    }
    return res;
};
exports.errorHandler = errorHandler;
