import { Router } from 'express';

import { notes } from '../../controllers/user/notes'
export const user_notes = Router();

user_notes.get('/', notes)
user_notes.post('/')
user_notes.put('/:id')
user_notes.delete('/:id')