const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");

// Database handling
const mongoose = require("mongoose");

// API
const api = require("./api/index");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );

    mongoose
      .connect(
        "mongodb://localhost:27017/techoverdose",
        { useNewUrlParser: true }
      )
      .then(
        () => {
          console.log("Database is connected");
        },
        err => {
          console.log("Can not connect to the database" + err);
        }
      );

    server.use("/api", api);

    server.get("/hub/:id/:slug", (req, res) => {
      const actualPage = "/hub";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/framework/:frameworkId/:slug", (req, res) => {
      const actualPage = "/framework";
      const queryParams = { id: req.params.frameworkId };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
