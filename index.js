const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("courses API Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
// if (categories.id === 0) {
//   app.get("/courses", (req, res) => {
//     res.send(courses);
//   });
// }
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == "06") {
    res.send(courses);
  } else {
    const selectedCategory = courses.filter((n) => n.id === id);
    res.send(selectedCategory);
  }
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedcourses = courses.filter((n) => n._id == id);
  res.send(selectedcourses);
});

app.listen(port, () => {
  console.log("courses Server running on port", port);
});
