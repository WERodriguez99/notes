import mongoose, { Schema, model, ObjectId } from 'mongoose';

export interface User extends mongoose.Document {
    id: ObjectId,
    name: string,
    pass: string,
    mail: string,
    active: boolean | null
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