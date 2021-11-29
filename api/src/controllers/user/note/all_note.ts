
import { Request, Response, NextFunction } from 'express';
import noteModel, { Note } from '../../../models/note';
import mongoose from 'mongoose';

export const allNotes = async ( req: Request, res: Response, next: NextFunction ) => {

    try {
        const id = typeof req.query.id === 'string' && new mongoose.Types.ObjectId( req.query.id )
        
        if(id){
            const notes = await noteModel.find({ where: {author: id} })

            res.status(200).json(notes)
        }
        
    }
    catch(err: any){
        next(err)
    }
};