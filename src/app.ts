import express = require("express");

// Create a new express application instance
const app: express.Application = express();
import { v1Router } from "./api/v1";

app.use("/api/v1", v1Router);
const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.info(`[App]: Listening on port ${port}!`);
});
