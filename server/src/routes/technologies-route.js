import { Router } from "express";
import {
  getTechnologies,
} from "../controllers/technologies-controller.js";
const router = Router();

router.get("/", getTechnologies);

export default router;
