import express from 'express';
import studentController from '../controllers/studentcontroller';
import mylogger from '../middlewares/logger-middleware';

const router = express.Router();

// router level middleware
router.use(mylogger);

router.get('/student', studentController);

export default router;
