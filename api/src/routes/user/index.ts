import { Router } from 'express';

// MIDDLEWARES
import { verifyUser } from '../../middlewares/verifyUser';
import { veriryToken } from '../../middlewares/verifyToken';

// CONTROLLERS

import { notes } from '../../controllers/user/notes';
import { singup } from '../../controllers/user/singup';
import { login } from '../../controllers/user/login';

export const user = Router();

user.post('/singup', singup)
user.post('/login', verifyUser, login)

user.get('/home', veriryToken, notes)
user.post('/notes')
user.put('/notes:id')
user.delete('/notes:id')