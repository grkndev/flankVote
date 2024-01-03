// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
      status: boolean;
      message: string;
};

export default function handler(
      req: NextApiRequest,
      res: NextApiResponse<Data>
) {
      const data = req.body
      console.log(data)
      res.status(200).json({ status: true, message: "Başarılı" });
}
