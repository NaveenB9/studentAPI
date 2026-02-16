import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const StudentSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name",
  },
  lastName: {
    type: String,
    required: "Enter a last name",
  },
  rollNo: {
    type: Number,
    required: "Enter a roll number",
    unique: true, // Recommended: ensures no two students have the same Roll No
  },
  branch: {
    type: String,
  },
  college: {
    type: String,
  },
  marks: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
