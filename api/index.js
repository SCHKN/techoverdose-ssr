const routes = require("express").Router();
const hubs = require("./hubs");
const frameworks = require("./frameworks");

routes.use("/hubs", hubs);
routes.use("/frameworks", frameworks);

module.exports = routes;
