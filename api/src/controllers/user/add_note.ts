import { Request, Response, NextFunction } from 'express';
import noteModel, { Note } from '../../models/note';

export const addNote = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { title, note, author }: Note = req.body;
        
        const newNote = new noteModel({title, note, author});
        const noteCreate = await newNote.save();
        res.status(200).json({ msj: 'Success creation note' })
    }
    catch(err){
        next(err)
    }
}