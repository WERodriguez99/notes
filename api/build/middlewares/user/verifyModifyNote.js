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
exports.verifyModifyNote = void 0;
const note_1 = __importDefault(require("../../models/note"));
const verifyModifyNote = (req, __res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, note } = req.body;
        const data = yield note_1.default.findById(req.params.id);
        data && data.title.trim() === title.trim() && data.note.trim() === note.trim() ? (() => { throw new Error('Note is exact'); })() : next();
    }
    catch (err) {
        console.log(err);
        next(err);
    }
});
exports.verifyModifyNote = verifyModifyNote;
