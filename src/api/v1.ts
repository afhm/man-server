import express = require("express");
// import { userRouter } from "../../../../modules/users/infra/http/routes";

import { applyMiddleware } from "../utils";
import middleware from "../middleware";

const v1Router = express.Router();

applyMiddleware(middleware, v1Router);
v1Router.get("/", (req, res) => res.json({ message: "Yo! we're up" }));
// v1Router.use("/users", userRouter);

export { v1Router };
