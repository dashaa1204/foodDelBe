"use client";
import { nanoid } from "nanoid";

import { NextApiRequest, NextApiResponse } from "next";
import connect from "./database";
import NextCors from "nextjs-cors";
import { changePass, mailOptions, transporter } from "@/services/forgotPass";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const vc = nanoid(6);
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
        mailOptions.text = vc;
        await transporter.sendMail({ ...mailOptions });
        return res
          .status(200)
          .json({ message: "Successfully sent verification email" });
      } catch (e: any) {
        res.status(403).json({ message: e.message });
      }
    case "PUT":
      try {
        changePass(data.email, vc);
        return res.status(200).json({ message: "Successfully updated pass" });
      } catch (e: any) {
        res.status(403).json({ message: e.message });
      }
  }
};

export default handler;
