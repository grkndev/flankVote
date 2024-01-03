// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AnswersModal from "@/components/database/AnswersModal";
import dbConnect from "@/components/database/MongoClient";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

type Data = {
  detectedIp: string | null;
  isFinished: boolean;
  error: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 try{
  const detectedIp = requestIp.getClientIp(req);
  await dbConnect();
  const isFinished = await AnswersModal.findOne({user:detectedIp}) ? true : false
  res.status(200).json({ detectedIp, isFinished });
  return;
 }
 catch{
  return res.status(200).json({error:true})
 }
}
