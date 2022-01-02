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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNewNote = void 0;
const verifyNewNote = (req, __res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, note } = req.body;
        !title && !note && (() => { throw new Error('TITLE and NOTE are missing'); })();
        !title ? ((() => { throw new Error('TITLE missing'); })()) : !note ? ((() => { throw new Error('NOTE missing'); })()) : next();
    }
    catch (err) {
        console.error(err);
        next(err);
    }
});
exports.verifyNewNote = verifyNewNote;
