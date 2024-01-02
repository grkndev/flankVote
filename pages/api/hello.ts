// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";

type Data = {
  detectedIp: string | null;
  isFinished: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const detectedIp = requestIp.getClientIp(req);
  let isFinished = detectedIp == "::1" ? true : false;
  res.status(200).json({ detectedIp, isFinished });
}
