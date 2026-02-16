import express from "express";
import routes from "./src/routes/studentRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/StudentDB", {});

//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Hello World! Node and express running on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`StudentAPI app listening at ${PORT}`);
});
