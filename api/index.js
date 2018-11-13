const routes = require("express").Router();
const hubs = require("./hubs");
const frameworks = require("./frameworks");
const repositories = require("./repositories");

routes.use("/hubs", hubs);
routes.use("/frameworks", frameworks);
routes.use("/repositories", repositories);

module.exports = routes;
