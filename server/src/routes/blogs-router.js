import { Router } from "express";
import { getBlogs } from "../controllers/blogs-controller.js";

const router = Router();

router.get("/", getBlogs);

export default router;
