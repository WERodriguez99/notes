import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const veriryToken = async ( req: Request, __res: Response, next: NextFunction ) => {
    try {
        const token = req.headers['x-access-token'];

        if(!token) throw new Error( "no Token aws Provided" );
        
        typeof token === 'string' && jwt.verify(token, "mysecretkey") && next()
    }
    catch(err){
        next(err)
    }
}

