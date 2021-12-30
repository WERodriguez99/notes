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

        
        !user ? ((()=> { throw new Error('User not found') } )()) : !bcrypt.compareSync(pass, user.pass) ? (( () => { throw new Error('mail or password is invalid') })()) : !user.activ ? ((() => { throw new Error(' Account inactiv, check mail to activ account ') })()) : next() 
        

    }
    catch(err){
        console.log(err)
        next(err)
    }

}