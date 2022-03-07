import express from 'express';
import {
  login,
  register,
  checkEmail,
  // showProjects,
} from "../controllers/auth-controller.js";

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/checkEmail', checkEmail);

// router.get("/projects", showProjects);

export default router;