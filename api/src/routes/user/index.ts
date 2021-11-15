import { Router, ErrorRequestHandler } from 'express';

// MIDDLEWARES
import { verifyUser } from '../../middlewares/verifyUser';
import { veriryToken } from '../../middlewares/verifyToken';

// CONTROLLERS

import { singup } from '../../controllers/user/singup';
import { login } from '../../controllers/user/login';
import { account } from '../../controllers/user/account';
import { addNote } from '../../controllers/user/add_note';
import { modifyNote } from '../../controllers/user/modify_note';
import { deleteNote } from '../../controllers/user/delete_note';

export const user = Router();

const errorHadler: ErrorRequestHandler = ( err, __req, res, __next) => {
    res.status(400).json({ msj: err.message })
}

user.post('/singup', singup)
user.post('/login', verifyUser, login)

user.get('/home', veriryToken, account)
user.post('/notes', addNote)
user.put('/notes:id', modifyNote)
user.delete('/notes:id', deleteNote)
user.use(errorHadler)