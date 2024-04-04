// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";
import connect from "./database";
import type { NextApiRequest, NextApiResponse } from "next";
import { loginService } from "@/services/user";

type Data = {
  message?: string;
  token?: string | any;
  user?: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await connect();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  const data = req.body;
  const { email, password } = data;
  console.log(data);

  try {
    const token = await loginService(email, password);
    if (token) {
      return res
        .status(200)
        .json({ token: token, message: "Login successful" });
    }
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
}
