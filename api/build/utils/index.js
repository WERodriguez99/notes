"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { ADMIN_MAIL, ADMIN_PASS, MY_SECRET_KEY, FRONT_HOST } = process.env;
const utils = {
    transporter: nodemailer_1.default.createTransport({
        service: "gmail",
        port: 587,
        host: "smtp.gmail.com",
        secure: false,
        auth: {
            user: ADMIN_MAIL,
            pass: ADMIN_PASS,
        },
        tls: {
            rejectUnauthorized: false
        },
    }),
    globalVar: {
        mysecretkey: MY_SECRET_KEY,
        admin_pass: ADMIN_PASS,
        admin_mail: ADMIN_MAIL,
        front_host: FRONT_HOST,
    },
};
exports.default = utils;
