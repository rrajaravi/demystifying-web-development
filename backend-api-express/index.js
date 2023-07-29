const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;

const options = {
  origin: ["http://localhost:3001", "http://localhost:3001/topics"],
};
app.use(cors(options));

app.get("/topics", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const topics = [
    "HTML, CSS and JS",
    "FrontEnd - CSS framework (BootStrap, Tailwind CSS ..etc",
    "Templating System",
    "Programming Language",
    "Backend Framework (Django, Flask, Spring, ExpressJs)",
    "Database (SQLAlchemy, Hibernate)",
    "ORM",
    "UI Framework (ReactJs, Angular, Vue..etc)",
    "Micro Framework vs FullStack Framework",
    "Javascript - MEAN and MERN Stack",
    "Python - Django and Flask",
    "Java - Spring boot",
  ];
  res.send(topics);
});

app.get("/topics/backend", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const topics = [
    "Programming Language",
    "Backend Framework (Django, Flask, Spring, ExpressJs)",
    "Database (SQLAlchemy, Hibernate)",
    "ORM",
    "Micro Framework vs FullStack Framework",
    "Javascript - MEAN and MERN Stack",
    "Python - Django and Flask",
    "Java - Spring boot",
  ];
  res.send(topics);
});

app.get("/topics/frontend", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const topics = [
    "HTML, CSS and JS",
    "FrontEnd - CSS framework (BootStrap, Tailwind CSS ..etc",
    "Templating System",
    "UI Framework (ReactJs, Angular, Vue..etc)",
  ];
  res.send(topics);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
