import mongoose, { Schema, model, ObjectId } from 'mongoose';

export interface Note extends mongoose.Document {
    title: string,
    note: string,
    author: ObjectId,
}

const note_schema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true,
    },

    note: {
        type: String,
        required: true,
    },

    author: {
        type: mongoose.Types.ObjectId,
        required: true,
    }

}, {
    versionKey: false,
    timestamps: true,
});

export default model<Note>('Note', note_schema)