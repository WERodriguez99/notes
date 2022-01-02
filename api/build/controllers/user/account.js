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
exports.account = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../../models/user"));
const note_1 = __importDefault(require("../../models/note"));
const utils_1 = __importDefault(require("../../utils"));
const account = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.headers['x-access-token'];
        const { notes } = req.query;
        if (token && typeof token === 'string') {
            notes === 'null' &&
                ((() => jsonwebtoken_1.default.verify(token, utils_1.default.globalVar.mysecretkey, {}, (__err, userID) => __awaiter(void 0, void 0, void 0, function* () {
                    const user = yield user_1.default.aggregate([{
                            $lookup: {
                                from: 'notes',
                                localField: '_id',
                                foreignField: 'author',
                                as: 'userNotes',
                            }
                        }]);
                    res.status(200).json(user.filter((el) => el._id.toString() === userID.id)[0]);
                })))());
            notes === 'notes' &&
                ((() => jsonwebtoken_1.default.verify(token, utils_1.default.globalVar.mysecretkey, {}, (__err, userID) => __awaiter(void 0, void 0, void 0, function* () {
                    //const note = await noteModel.findOne({ author: userID.id }).sort({ createdAt: -1 })
                    const note = yield note_1.default.find({ author: userID.id });
                    res.status(200).json(note);
                })))());
        }
    }
    catch (err) {
        next(err);
    }
});
exports.account = account;
