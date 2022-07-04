const express = require('express');
const router  = express.Router();

import { login ,Register,getAllUSers }from '../controllers/usercontroller';


router.post('/login', login);
router.post('/register', Register);
router.get('/allUsers', getAllUSers);





export default router;