import { UserModel } from "@/models/user.shcema";
import { generateJwtToken } from "@/utils/generate-token";

// export const loginService = async (email: string, password: number) => {
//   if (email == "bla@gmail.com" && password == "bla") {
//     const userInfo = {
//       email: email,
//       name: "dash",
//     };
//     return generateJwtToken(userInfo);
//   } else {
//     throw new Error("invalid credentials");
//   }
// };

export const createUser = async (
  name: String,
  adress: String,
  email: String,
  password: String
) => {
  const createUser = UserModel.create({ name, adress, email, password });
  return createUser;
};
