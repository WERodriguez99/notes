
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const { ADMIN_MAIL, ADMIN_PASS, MY_SECRET_KEY, FRONT_HOST } = process.env;

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

      globalVar:  {
          mysecretkey: MY_SECRET_KEY,
          admin_pass: ADMIN_PASS,
          admin_mail: ADMIN_MAIL,
          front_host: FRONT_HOST,
        },
      
};

export default utils;