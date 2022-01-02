"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const routes_1 = require("./routes");
exports.server = (0, express_1.default)();
exports.server.use((0, morgan_1.default)('dev'));
exports.server.use((0, cors_1.default)());
exports.server.use(express_1.default.json());
exports.server.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
exports.server.use((0, express_session_1.default)({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));
exports.server.use('/', routes_1.api);
