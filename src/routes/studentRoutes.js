import {
  addNewStudent,
  getStudents,
  getStudentWithRollNo,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController";

const routes = (app) => {
  app
    .route("/student")
    // get all students
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getStudents)

    // post a new student
    .post(addNewStudent);

  app
    .route("/student/:studentRollNo") // This defines the param name used in the controller
    // get specific student by Roll No
    .get(getStudentWithRollNo)

    // update a student by Roll No
    .put(updateStudent)

    // to delete a student by Roll No
    .delete(deleteStudent);
};

export default routes;
