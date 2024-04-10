const nodemailer = require("nodemailer");
import { UserModel } from "@/models/user.shcema";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    pass: process.env.NEXT_PUBLIC_BURNER_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
  to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
  subject: "Verification code",
  text: "",
};

export const changePass = async (email: string, updatedPass: string) => {
  const changePass = await UserModel.updateOne(
    { email },
    { password: updatedPass }
  );
  return changePass;
};
