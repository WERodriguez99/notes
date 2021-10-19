import { Request, Response, NextFunction } from 'express';
import jws from 'jsonwebtoken';

export const veriryToken = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const token = req.headers['x-access-token'];
        !token && res.status(401).send({ auth: false, message: "no Token aws Provided" });
        
        console.log(`LocalStore token: ${token}`)
        const token2 = typeof token === 'string' && jws.verify(token, "mysecretkey")
        console.log(`MyToken token: ${token2}`)

        typeof token === 'string' && jws.verify(token, "mysecretkey") && next()
    }
    catch(err){
        console.log(err)
    }
}

