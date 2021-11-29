import { Request, Response, NextFunction } from "express";
import modelUser, { User } from '../../models/user';
import jwt from 'jsonwebtoken';

export const login = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { mail }: User = req.body;
        const user = await modelUser.findOne({ mail: mail })
        const token = jwt.sign({ id: user?._id }, "mysecretkey", {
            expiresIn: 60 * 60 * 24, // 60*60*24s = 1day 
          });

        res.status(200).json({ auth: true, token })
    }
    catch(err){
        next(err)
    }
}