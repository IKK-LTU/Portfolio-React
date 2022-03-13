import {Router} from "express";
import {
  getProjects,
  getProjectsItem,
  deleteProjectsItem,
  updateProjectsItem,
  createProjectsItem,
} from "../controllers/projects-controller.js";

const router = Router();


router.get("/", getProjects);
router.post("/", createProjectsItem);
router.get("/:projectId", getProjectsItem);
router.delete("/:projectId", deleteProjectsItem);
router.patch("/:projectId", updateProjectsItem);

export default router;
