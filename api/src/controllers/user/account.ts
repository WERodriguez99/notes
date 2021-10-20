import { Request, Response, NextFunction } from "express";
import userModel, { User } from '../../models/user';
import noteModel, { Note } from '../../models/note';

export const account = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { mail } = req.query;
        const info = typeof mail === 'string' && await userModel.aggregate([{
            $lookup: {
                from: 'Note',
                localField: '_id',
                foreignField: 'author',
                as: 'userNotes',
            }
        }]);
        res.status(200).json(info)
        
    }
    catch(err){
        next(err)
    }
}