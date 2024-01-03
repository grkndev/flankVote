// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import AnswersModal from "@/components/database/AnswersModal";
import dbConnect from "@/components/database/MongoClient";
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
type Data = {
      status: boolean;
      message: string;
      error?: boolean;
};
export default async function handler(
      req: NextApiRequest,
      res: NextApiResponse<Data>
) {
      await dbConnect();
      if (req.method !== "POST") return res.status(500).json({ status:false, error: true, message: "Invalid Method" })

      const data = req.body
      const detectedIp = req.body.forward;

      const user = await AnswersModal.findOne({ user: detectedIp })
      if (user) return res.status(200).json({ status:false, error: true, message: "User already voted" })

      new AnswersModal({
            user: detectedIp,
            answers: data.answers
      }).save()
      res.status(200).json({ status: true, message: "Başarılı" });
}
