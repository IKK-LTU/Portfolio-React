import {Router} from "express";
import {
  getProjects,
  getProjectsItem,
  deleteProjectsItem,
  updateProjectsItem,
  createProjectsItem,
  updateImage,
} from "../controllers/projects-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";
import imgUploadMiddleware from "../middlewares/img-upload-middleware.js";


const router = Router();


router.get("/", getProjects);
router.post("/", createProjectsItem);
router.get("/:projectId", getProjectsItem);
router.delete("/:projectId", deleteProjectsItem);
router.patch("/:projectId", updateProjectsItem);
router.put(
  "/img",
  authMiddleware,
  imgUploadMiddleware.single("img"),
  updateImage
);
export default router;
