"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = require("express");
const user_1 = require("./user");
exports.api = (0, express_1.Router)();
exports.api.use('/user', user_1.user);
