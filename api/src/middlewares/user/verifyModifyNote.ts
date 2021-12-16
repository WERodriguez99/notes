
import { Request, Response, NextFunction } from 'express';
import modelNote, { Note } from '../../models/note';

export const verifyModifyNote = async ( req: Request, __res: Response, next: NextFunction ) => {
    try {
        const { title, note }: Note = req.body;
        const data = await modelNote.findById(req.params.id);

        data && data.title.trim() === title.trim() && data.note.trim() === note.trim() ? (() => { throw new Error('Note is exact')})() : next();
    }

    catch(err: any){
        console.log(err);
        next(err);
    }
}