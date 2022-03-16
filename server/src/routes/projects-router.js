import {Router} from "express";
import {
  getProjects,
  getProjectsItem,
  deleteProjectsItem,
  updateProjectsItem,
  createProjectsItem,
} from "../controllers/projects-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import adminMiddleware from "../middlewares/admin-middleware.js";
const router = Router();

router.get("/", getProjects);
router.post("/",authMiddleware, createProjectsItem);
router.get("/:projectId", getProjectsItem);
router.delete("/:projectId",authMiddleware, deleteProjectsItem);
router.patch("/:projectId", authMiddleware, adminMiddleware, updateProjectsItem);

export default router;