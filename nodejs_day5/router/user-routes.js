import express from 'express';
import * as usercontroller from '../controllers/usercontroller';

const router = express.Router();

router.post('/login', usercontroller.loginUser);
router.post('/register', usercontroller.registerUser);
router.get('/allUsers', usercontroller.getAllUsers);

export default router;
