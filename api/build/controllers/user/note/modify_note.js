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
exports.modifyNote = void 0;
const note_1 = __importDefault(require("../../../models/note"));
const modifyNote = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, note, author } = req.body;
        const modifyMaterial = yield note_1.default.findByIdAndUpdate(id, { title, note, author });
        if (!modifyMaterial) {
            throw new Error("Note not found");
        }
        modifyMaterial && res.status(200).json({ msj: "Modify note" });
    }
    catch (err) {
        next(err);
    }
});
exports.modifyNote = modifyNote;
