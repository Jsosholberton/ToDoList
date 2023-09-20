import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    deadLine: {
      type: Date,
      default: Date.now(),
      require: true,
    },
    priority: {
      type: String,
      trim: true,
      enum: ["Low", "Medium", "High"],
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
