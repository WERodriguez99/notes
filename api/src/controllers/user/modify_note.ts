import { Request, Response, NextFunction } from 'express';
import noteModel, { Note } from '../../models/note';

export const modifyNote = async ( req: Request, res: Response, next: NextFunction ) => {
    
    try{
        const { id } = req.params;
        const { title, note, author }: Note = req.body;

        const modifyMaterial: Note = await noteModel.findByIdAndUpdate(id, { title, note, author });

        if(!modifyMaterial) {
            throw new Error("Id not found");
        }

        modifyMaterial && res.status(200).json({msj: "Material modificado con exito"})
    }
    catch(err){
        next(err)
    }
}