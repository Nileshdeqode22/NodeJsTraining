import express from 'express';
const router=express.Router();

import homeController  from '../controllers/homecontroller.js';
import  aboutController  from '../controllers/aboutcontroller.js';

router.get('/', homeController);
router.get('/about', aboutController);

export default router;
