import { Router } from 'express';
import { user } from './user';

export const api = Router();

api.use('/user', user)