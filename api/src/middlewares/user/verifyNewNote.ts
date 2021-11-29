
import { Request, Response, NextFunction } from 'express';
import { Note } from '../../models/note';

export const verifyNewNote = async ( req: Request, __res: Response, next: NextFunction ) => {

    try {
        const { title, note }: Note = req.body
        
        !title && !note && (() => { throw new Error('TITLE and NOTE are missing')})() 
        !title ? ( (() => { throw new Error('TITLE missing')})() ) : !note ? ( (() => { throw new Error('NOTE missing')})() ) : next();

    }
    catch(err: any){
        console.error(err)
        next(err)
    }
}
