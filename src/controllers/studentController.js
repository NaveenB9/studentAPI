import mongoose from "mongoose";
import { StudentSchema } from "../model/studentModel";

const Student = mongoose.model("Student", StudentSchema);

// 1. ADD NEW Student
export const addNewStudent = async (req, res) => {
  let newStudent = new Student(req.body);

  try {
    const student = await newStudent.save();
    res.json(student);
  } catch (err) {
    res.send(err);
  }
};

// 2. GET ALL Students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.send(err);
  }
};

// 3. GET SINGLE Student BY ROLL NO
export const getStudentWithRollNo = async (req, res) => {
  try {
    // CORRECTION: Use findOne() to search by rollNo, not findById()
    // CORRECTION: Use req.params.studentRollNo (matches route)
    const student = await Student.findOne({ rollNo: req.params.studentRollNo });
    res.json(student);
  } catch (err) {
    res.send(err);
  }
};

// 4. UPDATE Student
export const updateStudent = async (req, res) => {
  try {
    // CORRECTION: Find by rollNo, not _id
    const student = await Student.findOneAndUpdate(
      { rollNo: req.params.studentRollNo },
      req.body,
      { returnDocument: "after" }, // Returns the updated object
    );
    res.json(student);
  } catch (err) {
    res.send(err);
  }
};

// 5. DELETE Student
export const deleteStudent = async (req, res) => {
  try {
    // CORRECTION: Delete by rollNo, not _id
    // CORRECTION: req.params.contactId was incorrect
    await Student.deleteOne({ rollNo: req.params.studentRollNo });
    res.json({ message: "Successfully deleted Student" });
  } catch (err) {
    res.send(err);
  }
};
