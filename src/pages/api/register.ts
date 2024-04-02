import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/services/user";

const handler = async (res: NextApiResponse, req: NextApiRequest) => {
  const { firstName, lastName, email, age } = req.body;

  try {
    const user = await createUser(firstName, lastName, email, age);
    res.status(200).json({ message: "Successfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
