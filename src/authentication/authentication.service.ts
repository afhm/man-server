// import * as bcrypt from "bcrypt";
// import * as jwt from "jsonwebtoken";
// // import { getRepository } from "typeorm";
// import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException";
// import DataStoredInToken from "../interfaces/dataStoredInToken";
// import TokenData from "../interfaces/tokenData.interface";
// import User from "../user/user.interface";
// const { table } = require("../orm");

// class AuthenticationService {
//   public async register(userData: User) {
//     const email = await table("users")
//       .select("email")
//       .where("email", "=", userData.email)
//       .all();
//     if (email === userData.email) {
//       throw new UserWithThatEmailAlreadyExistsException(userData.email);
//     }
//     const hashedPassword = await bcrypt.hash(userData.password, 10);
//     const user = this.userRepository.create({
//       ...userData,
//       password: hashedPassword,
//     });
//     await this.userRepository.save(user);
//     user.password = undefined;
//     const tokenData = this.createToken(user);
//     const cookie = this.createCookie(tokenData);
//     return {
//       cookie,
//       user,
//     };
//   }
//   public createCookie(tokenData: TokenData) {
//     return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
//   }
//   public createToken(user: User): TokenData {
//     const expiresIn = 60 * 60; // an hour
//     const secret = process.env.JWT_SECRET;
//     const dataStoredInToken: DataStoredInToken = {
//       id: user.id,
//     };
//     return {
//       expiresIn,
//       token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
//     };
//   }
// }

// export default AuthenticationService;
