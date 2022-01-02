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
exports.verifyUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const verifyUser = (req, __res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { mail, pass } = req.body;
        if (!mail || !pass) {
            throw new Error('Data invalid');
        }
        const user = yield user_1.default.findOne({ mail: mail });
        !user ? ((() => { throw new Error('User not found'); })()) : !bcrypt_1.default.compareSync(pass, user.pass) ? ((() => { throw new Error('mail or password is invalid'); })()) : !user.activ ? ((() => { throw new Error(' Account inactiv, check mail to activ account '); })()) : next();
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.verifyUser = verifyUser;
