// import * as express from "express";
// import Controller from "../interfaces/controller.interface";
// // import validationMiddleware from "../middleware/validation.middleware";
// import User from "../user/user.interface";
// import AuthenticationService from "./authentication.service";

// class AuthenticationController implements Controller {
//   public path = "/auth";
//   public router = express.Router();
//   private authenticationService = new AuthenticationService();

//   constructor() {
//     this.initializeRoutes();
//   }

//   // private initializeRoutes() {
//   //   this.router.post(`${this.path}/register`, validationMiddleware(User), this.registration);
//   // }

//   private initializeRoutes() {
//     this.router.post(`${this.path}/register`, this.registration);
//   }

//   private registration = async (
//     request: express.Request,
//     response: express.Response,
//     next: express.NextFunction,
//   ) => {
//     const userData: User = request.body;
//     try {
//       const { cookie, user } = await this.authenticationService.register(userData);
//       response.setHeader("Set-Cookie", [cookie]);
//       response.send(user);
//     } catch (error) {
//       next(error);
//     }
//   };
// }

// export default AuthenticationController;
