import moongose from "mongoose";

const projectSchema = moongose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    deadLine: {
      type: Date,
      default: Date.now(),
    },
    client: {
      type: String,
      trim: true,
      required: true,
    },
    creator: {
      type: moongose.Schema.Types.ObjectId,
      ref: "User",
    },
    collaborators: [
      {
        type: moongose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestams: true,
  }
);

const Project = moongose.model("Project", projectSchema);
export default Project;
