// models/job.ts
import { Schema, model, models } from "mongoose";
// import { unique } from "next/dist/build/utils";

const JobSchema = new Schema({
  job_title: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

const Job = models.Job || model("Job", JobSchema);

export default Job;

