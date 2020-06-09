const express = require("express");
const helmet = require("helmet");

const fruitsRouter = require("../fruits/fruits-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server running!" });
});

server.use("/api/fruits", fruitsRouter);

module.exports = server;
