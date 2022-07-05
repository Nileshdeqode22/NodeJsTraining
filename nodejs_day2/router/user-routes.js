import express from 'express';
const router = express.Router();
import { login ,register,getAllUsers }from '../controllers/usercontroller';

router.post('/login', login);
router.post('/register', register);
router.get('/allUsers', getAllUsers);

export default router;