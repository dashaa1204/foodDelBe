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
  firstName: String,
  lastName: String,
  email: String,
  age: Number
) => {
  const createUser = UserModel.create({ firstName, lastName, email, age });
  return createUser;
};
