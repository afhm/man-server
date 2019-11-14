/* eslint-disable prefer-const */
import * as express from "express";
import NotAuthorizedException from "../../exceptions/WrongCredentialsException";
import Controller from "../interfaces/controller.interface";
// import authMiddleware from "../middleware/auth.middleware";
import userDto from "./user.dto";
import { NextFunction } from "connect";
import { email } from "envalid";
import UserWithThatEmailAlreadyExistsException from "../../exceptions/UserWithThatEmailAlreadyExistsException";
import UserRepo from "./user.repo";
import catchAsync from "../../utils/catchAsync";

class UserController implements Controller {
  public path = "/users";
  public router = express.Router();
  private err;
  private users;
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.createUser);
  }

  private getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    [this.err, this.users] = await catchAsync(UserRepo.getAllUsers());
    if (this.err) {
      next(new NotAuthorizedException());
    }

    res.send(this.users);
  };
  private createUser = async (req: express.Request, res: express.Response, next: NextFunction) => {
    const userData: userDto = req.body;
    [this.err, this.users] = await catchAsync(UserRepo.createUser(userData));
    if (this.err) {
      next(new UserWithThatEmailAlreadyExistsException(userData.email));
    }
    res.send(this.users);
  };
}

export default UserController;
