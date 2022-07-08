import express from 'express';

import homeController from '../controllers/homecontroller.js';
import aboutController from '../controllers/aboutcontroller.js';

const router = express.Router();

router.get('/', homeController);
router.get('/about', aboutController);

export default router;
