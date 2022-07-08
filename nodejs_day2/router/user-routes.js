import express from 'express';
// eslint-disable-next-line import/named
import { login, register, getAllUsers } from '../controllers/usercontroller';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/allUsers', getAllUsers);

export default router;
