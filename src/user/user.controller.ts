import * as express from "express";
// import NotAuthorizedException from "../exceptions/WrongCredentialsException";
import Controller from "../interfaces/controller.interface";
// import authMiddleware from "../middleware/auth.middleware";
// import postModel from "../post/post.model";
const { table } = require("../orm");
// const { pgQuery } = require("../db");

class UserController implements Controller {
  public path = "/users";
  public router = express.Router();
  // private post = postModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
  }

  private getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const rows = await table("users")
      .select("username")
      .all();
    res.send(rows);

    // next(new NotAuthorizedException());
  };
}

export default UserController;
