import { NextApiRequest, NextApiResponse } from "next";

const mongoose = require("mongoose");

const uri = process.env.MONGO_DB_URL;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const connect = async () => {
    try {
      await mongoose.connect(uri);
      console.log("Database successfully connected");
      res.send("Database successfully connected");
    } catch (e) {
      console.log(e);
    }
  };
  connect();
};

export default handler;
