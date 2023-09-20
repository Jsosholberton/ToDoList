import Project from "../models/Project.js";
import Task from "../models/Tasks.js";

const addTask = async (req, res) => {
  const { project } = req.body;

  const existProject = await Project.findById(project);

  if (!existProject) {
    const error = new Error("The project not exists");
    return res.status(404).json({ msg: error.message });
  }
  if (existProject.creator.toString() !== req.user._id.toString()) {
    const error = new Error("You don't have enough permissions");
    return res.status(403).json({ msg: error.message });
  }
  try {
    const saveTask = await Task.create(req.body);
    res.json(saveTask);
  } catch (err) {
    console.log(err);
  }
  console.log(existProject);
};

const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task not found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("You don't have enough permissions");
    return res.status(403).json({ msg: error.message });
  }
  res.json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task not found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("You don't have enough permissions");
    return res.status(403).json({ msg: error.message });
  }

  task.name = req.body.name || task.name;
  task.description = req.body.description || task.description;
  task.priority = req.body.priority || task.priority;
  task.deadLine = req.body.deadLine || task.deadLine;

  try {
    const saveTask = await task.save();
    res.json(saveTask);
  } catch (err) {
    console.log(err);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id).populate("project");

  if (!task) {
    const error = new Error("Task not found");
    return res.status(404).json({ msg: error.message });
  }

  if (task.project.creator.toString() !== req.user._id.toString()) {
    const error = new Error("You don't have enough permissions");
    return res.status(403).json({ msg: error.message });
  }

  try {
    await task.deleteOne();
    res.json({ msg: "Task deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};

const changeStateTask = async (req, res) => {};

export { addTask, getTask, updateTask, deleteTask, changeStateTask };
