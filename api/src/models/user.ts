import mongoose, { Schema, model, ObjectId } from 'mongoose';

export interface User extends mongoose.Document {
    name: string,
    password: string,
    email: string,
}

const user_schema = new Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },

    password: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        required: true,
    }
}, {
    versionKey: false,
    timestamps: true,
});

export default model<User>('User', user_schema)