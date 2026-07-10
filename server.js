/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Khanh Vy Tran   Student ID: 120175245   Date: 7/10/2026
*
*  Published URL: https://web-322-assignment2-gamma.vercel.app/

********************************************************************************/
const express = require("express");
const solutionData = require("./modules/solutions");

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// GET "/"
app.get("/", (req, res) => {
  res.render("home");
});

// GET "/about"
app.get("/about", (req, res) => {
  res.render("about");
});

// GET "/explorer/solutions"
app.get("/explorer/solutions", (req, res) => {
  if (req.query.sector) {
    solutionData
      .getSolutionsBySector(req.query.sector)
      .then((solutions) => {
        if (solutions.length > 0) {
          res.render("solutions", { solutions });
        } else {
          res.status(404).render("404", {
            message: `No solutions found for sector: ${req.query.sector}`
          });
        }
      })
      .catch(() => {
        res.status(404).render("404", {
          message: `No solutions found for sector: ${req.query.sector}`
        });
      });
  } else {
    solutionData
      .getAllSolutions()
      .then((solutions) => {
        res.render("solutions", { solutions });
      })
      .catch((err) => {
        res.status(404).render("404", { message: err });
      });
  }
});

// GET "/explorer/solutions/:id"
app.get("/explorer/solutions/:id", (req, res) => {
  solutionData
    .getSolutionById(req.params.id)
    .then((solution) => {
      res.render("solution", { solution });
    })
    .catch((err) => {
      res.status(404).render("404", { message: err });
    });
});

// 404 route
app.use((req, res) => {
  res.status(404).render("404", {
    message: "Oops! The page you are looking for does not exist."
  });
});

solutionData
  .initialize()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`Server listening on port ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });