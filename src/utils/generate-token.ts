import jwt from "jsonwebtoken";

export const generateJwtToken = (payload: any) => {
  return jwt.sign(payload, "my-key", { expiresIn: "1h" });
};
