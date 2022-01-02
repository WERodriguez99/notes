"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user_schema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)('User', user_schema);
