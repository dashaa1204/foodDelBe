import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/services/user";
import connect from "./database";
import NextCors from "nextjs-cors";
import { METHODS } from "http";
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "@/services/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  const data = req.body;
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  switch (req.method) {
    case "POST":
      try {
        const category = await createCategory(data.name);
        return res
          .status(200)
          .json({ message: "Successfully category created", category });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const categories = await getCategories();
        return res.status(200).json({ message: "Success", categories });
      } catch (e: any) {
        return res.status(403).json({ message: e.message });
      }
    case "PUT":
      try {
        const updatedCategory = await updateCategory(
          data.name,
          data.updatedName
        );
        return res
          .status(200)
          .json({ message: "Successfully updated category", updatedCategory });
      } catch (e: any) {
        return res.status(403).json({ message: e.message });
      }

    case "DELETE":
      try {
        await deleteCategory(data.id);
        return res
          .status(200)
          .json({ message: "Successfully deleted category" });
      } catch (e: any) {
        return res.status(403).json({ message: e.message });
      }
  }
};

export default handler;
