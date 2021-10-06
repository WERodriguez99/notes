import { Router } from 'express';
import { user_notes } from './notes';

export const api = Router();

api.use('/notes', user_notes)