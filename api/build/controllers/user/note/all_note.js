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
exports.allNotes = void 0;
const note_1 = __importDefault(require("../../../models/note"));
const mongoose_1 = __importDefault(require("mongoose"));
const allNotes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = typeof req.query.id === 'string' && new mongoose_1.default.Types.ObjectId(req.query.id);
        if (id) {
            const notes = yield note_1.default.find({ where: { author: id } });
            res.status(200).json(notes);
        }
    }
    catch (err) {
        next(err);
    }
});
exports.allNotes = allNotes;
