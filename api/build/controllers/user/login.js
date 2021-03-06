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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = __importDefault(require("../../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = __importDefault(require("../../utils"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail } = req.body;
        const user = yield user_1.default.findOne({ mail: mail });
        const token = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id }, utils_1.default.globalVar.mysecretkey, {
            expiresIn: 60 * 60 * 24, // 60*60*24s = 1day 
        });
        res.status(200).json({ auth: true, token });
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
