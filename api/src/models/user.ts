
import mongoose, { Schema, model, ObjectId } from 'mongoose';

import { Note } from './note' 

export interface User extends mongoose.Document {
    _id: ObjectId,
    name: string,
    pass: string,
    mail: string,
    activ: boolean,
    createdAt: string,
    updatedAt: string,
    userNotes?: Note[],
}

const user_schema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },

    pass: {
        type: String,
        require: true,
    },

    mail: {
        type: String,
        required: true,
    },

    activ: {
        type: Boolean,
        default: false
    },
}, {
    versionKey: false,
    timestamps: true,
});

export default model<User>('User', user_schema)