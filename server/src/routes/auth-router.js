import express from 'express';
import {
  login,
  register,
  checkEmail,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/check-email', checkEmail);

export default router;