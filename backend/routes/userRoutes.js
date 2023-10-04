import express from "express";
import { register, authenticate, confirm, lostPwd, checkToken, newPwd, profile } from '../controllers/userController.js'
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

// autentification, register and confirmation of users
router.post('/', register);
router.post('/login', authenticate);
router.get('/confirm/:token', confirm);
router.post('/lost-password', lostPwd);
router.get('/lost-password/:token', checkToken);
router.post('/lost-password/:token', newPwd);

router.get('/profile', checkAuth, profile);

export default router;
