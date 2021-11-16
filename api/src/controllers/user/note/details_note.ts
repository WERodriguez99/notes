import { Request, Response, NextFunction } from 'express';
import noteModel, { Note } from '../../../models/note';

export const detailsNote = async ( req: Request, res: Response, next: NextFunction ) => {
    
    try{
        const { id } = req.params;

        const note = await noteModel.findById(id);

        if(!note) {
            throw new Error("Note not found");
        }

        note && res.status(200).json(note);
    }
    catch(err){
        next(err)
    }
}