import { Request, Response, NextFunction } from "express";
import modelUser, { User } from '../models/user';
import bcrypt from 'bcrypt';

export const verifyUser = async ( req: Request, __res: Response, next: NextFunction ) => {
    try{
        const { mail, pass }: User = req.body;
        
        if(!mail || !pass) {
            throw new Error('Data invalid');
        } 

        const user = await modelUser.findOne({ mail: mail });

        if(!user) throw new Error('User not found');
        if(user){
            if(!bcrypt.compareSync(pass, user.pass)) throw new Error('Password is invalid')
            else next()
        }

    }
    catch(err){
        console.log(err)
        next(err)
    }

}