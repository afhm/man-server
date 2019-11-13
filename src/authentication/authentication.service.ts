import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
// import { getRepository } from "typeorm";
import UserWithThatEmailAlreadyExistsException from "../exceptions/UserWithThatEmailAlreadyExistsException";
import DataStoredInToken from "../interfaces/dataStoredInToken";
import TokenData from "../interfaces/tokenData.interface";
import User from "../user/user.dto";
const { table } = require("../orm");
import userRepo from "../user/user.repo";
import UserRepo from "../user/user.repo";
import to from "../utils/to";

class AuthenticationService {
  public async register(userData: User) {
    const userExists = await userRepo.userExists(userData.email);
    if (userExists) {
      throw new UserWithThatEmailAlreadyExistsException(userData.email);
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const userD = {
      ...userData,
      password: hashedPassword,
    };
    // await this.userRepository.save(user);
    const tokenData = this.createToken(userD);
    const cookie = this.createCookie(tokenData);

    await to(UserRepo.createUser(userD));
    return {
      cookie,
      userD,
    };
  }
  public createCookie(tokenData: TokenData) {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn}`;
  }
  public createToken(user: User): TokenData {
    const expiresIn = 60 * 60; // an hour
    const secret = process.env.JWT_SECRET;
    const dataStoredInToken: DataStoredInToken = {
      id: user.username,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
    };
  }
}

export default AuthenticationService;
