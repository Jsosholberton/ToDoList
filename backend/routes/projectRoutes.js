import express from "express";
import {
  getProjects,
  newProject,
  getProject,
  editProject,
  delProject,
  addCollaborator,
  delCollaborator,
} from "../controllers/projectController.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.route("/")
  .get(checkAuth, getProjects)
  .post(checkAuth, newProject);

router
  .route("/:id")
  .get(checkAuth, getProject)
  .put(checkAuth, editProject)
  .delete(checkAuth, delProject);

router.post("/add-collaborator/:id", checkAuth, addCollaborator);
router.post("/delete-collaborator/:id", checkAuth, delCollaborator);

export default router;
