import express from 'express';
const router=express.Router();
import studentController from '../controllers/studentcontroller';
import mylogger from '../middlewares/logger-middleware';

//router level middleware
router.use(mylogger);

router.get('/student', studentController);

export default router;