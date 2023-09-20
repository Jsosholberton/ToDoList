import Project from "../models/Project.js";
import Task from "../models/Tasks.js";

const getProjects = async (req, res) => {
  const projects = await Project.find().where("creator").equals(req.user);
  res.json(projects);
};

const newProject = async (req, res) => {
  const project = new Project(req.body);
  project.creator = req.user._id;

  try {
    const projectSave = await project.save();
    res.json(projectSave);
  } catch (err) {
    console.log(err);
  }
};

const getProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);

    if (!project) {
      const error = new Error("Project not found");
      return res.status(404).json({ msg: error.message });
    }

    if (project.creator.toString() !== req.user._id.toString()) {
      const error = new Error("Invalid action");
      return res.status(401).json({ msg: error.message });
    }

    const tasks = await Task.find().where("project").equals(project._id);

    res.json({
      project,
      tasks,
    });
  } catch (err) {
    const error = new Error("Something has wrong");
    console.log(err);
    return res.status(404).json({ msg: error.message });
  }
};

const editProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);

    if (!project) {
      const error = new Error("Project not found");
      return res.status(404).json({ msg: error.message });
    }

    if (project.creator.toString() !== req.user._id.toString()) {
      const error = new Error("Invalid action");
      return res.status(401).json({ msg: error.message });
    }

    project.name = req.body.name || project.name;
    project.description = req.body.description || project.description;
    project.deadLine = req.body.deadLine || project.deadLine;
    project.client = req.body.client || project.client;

    try {
      const projectSave = await project.save();
      res.json(projectSave);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    const error = new Error("Something has wrong");
    console.log(err);
    return res.status(404).json({ msg: error.message });
  }
};

const delProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);

    if (!project) {
      const error = new Error("Project not found");
      return res.status(404).json({ msg: error.message });
    }

    if (project.creator.toString() !== req.user._id.toString()) {
      const error = new Error("Invalid action");
      return res.status(401).json({ msg: error.message });
    }
    try {
      await project.deleteOne();
      res.json({ msg: "Project deleted" });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    const error = new Error("Something has wrong");
    console.log(err);
    return res.status(404).json({ msg: error.message });
  }
};

const addCollaborator = async (req, res) => {};

const delCollaborator = async (req, res) => {};


export {
  getProjects,
  newProject,
  getProject,
  editProject,
  delProject,
  addCollaborator,
  delCollaborator,
};
