import express = require("express");
// import { userRouter } from "../../../../modules/users/infra/http/routes";

const v1Router = express.Router();

v1Router.get("/", (req, res) => res.json({ message: "Yo! we're up" }));

// v1Router.use("/users", userRouter);

export { v1Router };
