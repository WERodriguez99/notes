import { Request, Response, NextFunction } from 'express';
import jws from 'jsonwebtoken';

export const veriryToken = async ( req: Request, __res: Response, next: NextFunction ) => {
    try {
        const token = req.headers['x-access-token'];

        if(!token) throw new Error( "no Token aws Provided" );
        
        typeof token === 'string' && jws.verify(token, "mysecretkey") && next()
    }
    catch(err){
        next(err)
    }
}

