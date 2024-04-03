import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/services/user";
import connect from "./database";
import NextCors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  const data = req.body;
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const user = await createUser(
      data.name,
      data.adress,
      data.email,
      data.password
    );
    return res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
