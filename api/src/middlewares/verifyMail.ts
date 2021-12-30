
import { Request, Response, NextFunction } from 'express';
import modelUser, { User } from '../models/user';

export const verifyMail = async ( req: Request, __res: Response, next: NextFunction ) => {
    try {
        const { name, mail, pass }: User = req.body;

        if(!name || !mail || !pass) throw new Error(' Data invalid ' ) 
        
        const account = await modelUser.findOne({ where: { mail: mail }})

        !account ? next() : ((()=>{ throw new Error(' mail in use ') })())
        
    }
    catch(err: any){
        next(err)
    }
}