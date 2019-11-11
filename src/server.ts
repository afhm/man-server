// import express = require("express");

// // Create a new express application instance
// const app: express.Application = express();
// import { v1Router } from "./api/v1";

// process.on("uncaughtException", e => {
//   console.log(e);
//   process.exit(1);
// });

// process.on("unhandledRejection", e => {
//   console.log(e);
//   process.exit(1);
// });
// require("./db").initConnection();

// app.use("/api/v1", v1Router);
// const port = process.env.PORT || 5000;

// app.listen(port, function() {
//   console.info(`[App]: Listening on port ${port}!`);
// });

import "dotenv/config";
import App from "./app";
// import AuthenticationController from "./authentication/authentication.controller";
import UserController from "./user/user.controller";
import validateEnv from "./utils/validateEnv";

validateEnv();

(async () => {
  require("./db").initConnection();
  // const app = new App([new UserController(), new AuthenticationController()]);

  const app = new App([new UserController()]);
  app.listen();
})();
