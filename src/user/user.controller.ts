/* eslint-disable prefer-const */
import * as express from "express";
import NotAuthorizedException from "../exceptions/WrongCredentialsException";
import Controller from "../interfaces/controller.interface";
// import authMiddleware from "../middleware/auth.middleware";
import userDto from "../user/user.dto";
import { NextFunction } from "connect";
import { email } from "envalid";
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException";
import UserRepo from "./user.repo";
import to from "../utils/to";

class UserController implements Controller {
  public path = "/users";
  public router = express.Router();
  // private post = postModel;

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }

  private getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let err, users;
    [err, users] = await to(UserRepo.getAllUsers());
    if (!users) {
      next(new NotAuthorizedException());
    }

    res.send(users);
  };
  private createUser = async (req: express.Request, res: express.Response, next: NextFunction) => {
    let err, user;
    const userData: userDto = req.body;
    [err, user] = await to(UserRepo.createUser(userData));
    if (err) {
      next(new UserWithThatEmailAlreadyExistsException(userData.email));
    } else {
      res.send(user);
    }
  };
}

export default UserController;
