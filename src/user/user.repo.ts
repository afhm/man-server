const { table } = require("../orm");
// const { pgQuery } = require("../db");

export default class UserRepo {
  static getAllUsers() {
    return table("users").all();
  }
  static async createUser(userData) {
    const exists = await this.userExists(userData.email);
    if (exists) {
      throw new Error();
    } else {
      return table("users").insert(userData);
    }
  }
  static async userExists(userEmail) {
    const user = await table("users")
      .select("email")
      .where("email", "=", userEmail)
      .all();
    return Object.entries(user).length === 0 ? false : true;
  }
}
