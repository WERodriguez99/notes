
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import userModel, { User } from '../../models/user';


export const account = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const token = req.headers['x-access-token'];
        if(token && typeof token === 'string'){
            jwt.verify(token, "mysecretkey", {}, async (err: any, userID: any)=>{
                const user = await userModel.aggregate([{
                    $lookup: {
                        from: 'notes',
                        localField: '_id',
                        foreignField: 'author',
                        as: 'userNotes',
                    }
                }]);
                
                console.log(userID.id);
                console.log(typeof user[0]._id);
                console.log(user.filter(( el: User ) => el._id === userID.id) )
                res.status(200).json(user.filter(( el: User ) => el._id.toString() === userID.id)[0])
            });
        }
    }
    catch(err){
        next(err)
    }
        
}