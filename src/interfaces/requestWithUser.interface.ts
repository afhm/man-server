import { Request } from "express";
import User from "../user/user.dto";

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
