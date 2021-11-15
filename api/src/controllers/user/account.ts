import { Request, Response, NextFunction } from "express";
import userModel from '../../models/user';


export const account = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { mail } = req.query;
        const user = await userModel.aggregate([{
            $lookup: {
                from: 'notes',
                localField: '_id',
                foreignField: 'author',
                as: 'userNotes',
            }
        }]);
        
        res.status(200).json(user.filter(el => el.mail === mail)[0])
        
    }
    catch(err){
        next(err)
    }
}