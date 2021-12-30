
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const { ADMIN_MAIL, ADMIN_PASS } = process.env;

const utils: any = {
    transporter: nodemailer.createTransport({
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
};

export default utils;