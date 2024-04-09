import { NextApiRequest, NextApiResponse } from "next";
import connect from "./database";
import NextCors from "nextjs-cors";
import { createFood, getFoods } from "@/services/food";

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
        const food = await createFood(
          data.name,
          data.category,
          data.img,
          data.ingredient,
          data.price,
          data.sale
        );
        console.log(food);
        return res
          .status(200)
          .json({ message: "Successfully food created", food });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }
    case "GET":
      try {
        const foods = await getFoods();
        return res.status(200).json({ message: "Success", foods });
      } catch (e: any) {
        return res.status(403).json({ message: e.message });
      }
  }
};

export default handler;
