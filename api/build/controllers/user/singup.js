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
exports.verify = exports.singup = void 0;
const user_1 = __importDefault(require("../../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = __importDefault(require("../../utils"));
const singup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, mail, pass } = req.body;
        const hashedPass = yield bcrypt_1.default.hash(pass, 15);
        const newUser = new user_1.default({
            name, mail, pass: hashedPass
        });
        const saveUser = yield newUser.save();
        const token = jsonwebtoken_1.default.sign({ _id: saveUser._id }, utils_1.default.globalVar.mysecretkey, { expiresIn: 60 * 60 * 24 });
        yield utils_1.default.transporter.sendMail({
            from: utils_1.default.globalVar.admin_mail,
            to: mail,
            subject: "Verify your new Account in MyNotes",
            html: `<p> Hi ${newUser.name}. In order to verify your new Account, please </p>
          <a href="${utils_1.default.globalVar.front_host}confirmMail/${token}"> Click here </a>. 
          <p>If you did not request a new account, please ignore this mail. </p>`,
        });
        return res.status(200).json({ msj: "User created" });
    }
    catch (err) {
        next(err);
    }
});
exports.singup = singup;
const verify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        jsonwebtoken_1.default.verify(token, utils_1.default.globalVar.mysecretkey, {}, (__err, userID) => __awaiter(void 0, void 0, void 0, function* () {
            const update = { activ: true };
            const activateUser = yield user_1.default.findByIdAndUpdate(userID, update);
            !activateUser ? (() => { throw new Error('Error in activated account'); })() : res.json({ state: true, msj: "account activated" });
        }));
    }
    catch (err) {
        next(err);
    }
});
exports.verify = verify;
