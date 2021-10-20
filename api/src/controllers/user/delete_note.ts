import { Request, Response, NextFunction } from 'express';
import noteModel from '../../models/note';

export const deleteNote = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const { id } = req.params;
        await noteModel.findByIdAndDelete(id);
        res.status(200).json({msj: "Material eliminado"})
    }
    catch(err){
        next(err)
    }
}