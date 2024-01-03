// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AnswersModal from "@/components/database/AnswersModal";
import dbConnect from "@/components/database/MongoClient";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import bcrypt from "bcrypt";

type Data = {
  detectedIp?: string | null;
  isFinished?: boolean;
  error?: boolean;
<<<<<<< HEAD
  deneme?: any;
=======
>>>>>>> d41b87b295531bd90442968f8cdea9476952fa57
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
<<<<<<< HEAD
  if (req.method !== "POST") return res.status(200).json({ error: true });
=======
  if (req.method !== "POST") return res.status(200).json({ error: true })
>>>>>>> d41b87b295531bd90442968f8cdea9476952fa57
  try {
    const detectedIp = req.body.forward;

    await dbConnect();
<<<<<<< HEAD
    const isFinished = (await AnswersModal.findOne({ user: detectedIp }))
      ? true
      : false;

    res.status(200).json({ detectedIp, isFinished });
    return;
  } catch {
    return res.status(200).json({ error: true });
=======
    const isFinished = await AnswersModal.findOne({ user: detectedIp }) ? true : false

    res.status(200).json({ detectedIp, isFinished });
    return;
  }
  catch {
    return res.status(200).json({ error: true })
>>>>>>> d41b87b295531bd90442968f8cdea9476952fa57
  }
}
