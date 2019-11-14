import * as express from "express";
import Controller from "../api/interfaces/controller.interface";
import validationMiddleware from "../api/middlewares/validation.middleware";
import User from "../api/user/user.dto";
import AuthenticationService from "./authentication.service";

class AuthenticationController implements Controller {
  public path = "/auth";
  public router = express.Router();
  private authenticationService = new AuthenticationService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, validationMiddleware(User), this.registration);
  }

  private registration = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction,
  ) => {
    const userData: User = request.body;
    try {
      const { cookie, userD } = await this.authenticationService.register(userData);
      response.setHeader("Set-Cookie", [cookie]);
      response.send(userD);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthenticationController;
