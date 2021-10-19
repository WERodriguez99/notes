import { Request, Response, NextFunction } from "express";

export const notes = ( __req: Request, res: Response, next: NextFunction ) => {
    res.json({ msj: 'Hello' })
}