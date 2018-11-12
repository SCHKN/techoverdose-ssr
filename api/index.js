const routes = require("express").Router();
const hubs = require("./hubs");


routes.use("/hubs", hubs);
module.exports = routes;
