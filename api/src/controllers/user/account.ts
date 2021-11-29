
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import userModel, { User } from '../../models/user';
import noteModel, { Note } from '../../models/note';
import mongoose from 'mongoose';


export const account = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const token = req.headers['x-access-token'];
        const { notes }= req.query
        
        if(token && typeof token === 'string'){
            
            notes === 'null' &&
            ( (() => jwt.verify(token, "mysecretkey", {}, async (err: any, userID: any)=>{
                const user = await userModel.aggregate([{
                    $lookup: {
                        from: 'notes',
                        localField: '_id',
                        foreignField: 'author',
                        as: 'userNotes',
                    }
                }]);
                res.status(200).json(user.filter(( el: User ) => el._id.toString() === userID.id)[0])

            }))()) 
            
            notes === 'notes' &&
            
            ( (() => jwt.verify(token, "mysecretkey", {}, async (err: any, userID: any)=>{
                //const note = await noteModel.findOne({ author: userID.id }).sort({ createdAt: -1 })
                
                const note = await noteModel.find({ author: userID.id })

                res.status(200).json(note)
            }))());
        }
    }
    catch(err){
        next(err)
    }
        
}