"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    JWT_SECRET: process.env.JWT_SECRET,
    DB: {
        URI: process.env.MONGODB_URI,
    },
    PORT: process.env.PORT,
};
