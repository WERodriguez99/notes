import { Request, Response, NextFunction } from "express";
import modelUser, { User } from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import utils from '../../utils';

export const singup = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { name, mail, pass }: User = req.body;
        const hashedPass: string = await bcrypt.hash(pass, 15);
        const newUser = new modelUser({
            name, mail, pass: hashedPass
        });
      

        const saveUser = await newUser.save();
        const token: string = jwt.sign({ _id: saveUser._id }, utils.globalVar.mysecretkey, { expiresIn: 60*60*24 })
        
        await utils.transporter.sendMail({
          from: utils.globalVar.admin_mail,
          to: mail,
          subject: "Verify your new Account in MyNotes",
          html: `<p> Hi ${newUser.name}. In order to verify your new Account, please </p>
          <a href="${utils.globalVar.front_host}confirmMail/${token}"> Click here </a>. 
          <p>If you did not request a new account, please ignore this mail. </p>`,
        });
        
        return res.status(200).json({msj: "User created"});
    }
    catch(err){
        next(err)
    }
}

export const verify = async ( req: Request, res: Response, next: NextFunction ) => {

    try {
        const { token } = req.params;

        jwt.verify(token, utils.globalVar.mysecretkey, {}, async (__err: any, userID: any) => {
          const update = {activ: true}
          const activateUser = await modelUser.findByIdAndUpdate(userID, update)
  
          !activateUser ? (() => { throw new Error('Error in activated account') })() : res.json({ state: true, msj: "account activated" }) 

        });

    }
    catch(err: any){
      next(err)
    }
}  


