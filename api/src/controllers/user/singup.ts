import { Request, Response, NextFunction } from "express";
import modelUser, { User } from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const singup = async ( req: Request, res: Response, __next: NextFunction ) => {
    try {
        const { name, mail, pass }: User = req.body;
        const hashedPass: string = await bcrypt.hash(pass, 15);
        const newUser = new modelUser({
            name, mail, pass: hashedPass
        });
        const saveUser = await newUser.save();
        const token: string = jwt.sign({ _id: saveUser._id }, 'mysecretkey')

        res.header('auth-token', token).status(200).json({msj: "User created"});
    }
    catch(err){
        next(err)
    }
}