import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import session from 'express-session';
import { api } from './routes';

export const server: Application = express();

server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}))

server.use('/api', api)