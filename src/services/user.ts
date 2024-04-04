import { UserModel } from "@/models/user.shcema";
import { stat } from "fs";
import jwt from "jsonwebtoken";

export const createUser = async (
  name: String,
  adress: String,
  email: String,
  password: String
) => {
  const createUser = UserModel.create({ name, adress, email, password });
  return createUser;
};

export const loginService = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const user = await UserModel.findOne({ email, password });
    console.log(user);
    if (email == user.email && password == user.password) {
      const userInfo = {
        email: email,
        name: password,
      };
      const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
        expiresIn: "1h",
      });
      return newToken;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    return new Error(e.message);
  }
};
