"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = require("express");
// MIDDLEWARES
const verifyUser_1 = require("../../middlewares/verifyUser");
const verifyToken_1 = require("../../middlewares/verifyToken");
const verifyNewNote_1 = require("../../middlewares/user/verifyNewNote");
const verifyModifyNote_1 = require("../../middlewares/user/verifyModifyNote");
const verifyMail_1 = require("../../middlewares/verifyMail");
// CONTROLLERS
const singup_1 = require("../../controllers/user/singup");
const login_1 = require("../../controllers/user/login");
const singup_2 = require("../../controllers/user/singup");
const account_1 = require("../../controllers/user/account");
const details_note_1 = require("../../controllers/user/note/details_note");
const add_note_1 = require("../../controllers/user/note/add_note");
const modify_note_1 = require("../../controllers/user/note/modify_note");
const delete_note_1 = require("../../controllers/user/note/delete_note");
exports.user = (0, express_1.Router)();
const errorHadler = (err, __req, res, __next) => {
    res.status(400).json({ msj: err.message });
};
exports.user.post('/singup', verifyMail_1.verifyMail, singup_1.singup);
exports.user.post('/login', verifyUser_1.verifyUser, login_1.login);
exports.user.get('/activated/:token', singup_2.verify);
exports.user.get('/home', verifyToken_1.veriryToken, account_1.account);
exports.user.get('/allnote', account_1.account);
exports.user.get('/note/:id', details_note_1.detailsNote);
exports.user.post('/note', verifyNewNote_1.verifyNewNote, add_note_1.addNote);
exports.user.put('/note/:id', verifyModifyNote_1.verifyModifyNote, modify_note_1.modifyNote);
exports.user.delete('/note/:id', delete_note_1.deleteNote);
exports.user.use(errorHadler);
