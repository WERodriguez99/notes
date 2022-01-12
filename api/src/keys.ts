
import dotenv from 'dotenv';
dotenv.config();

const { DB_URL } = process.env

export const mongodb: {
    "URI": string
} = {
    "URI": DB_URL || "mongodb://localhost/notes"
}