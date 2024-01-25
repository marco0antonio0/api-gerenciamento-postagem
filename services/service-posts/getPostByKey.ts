import { NextApiRequest, NextApiResponse } from "next";
import { getPost, getPostByKey } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};
export async function GetPostByKey(req: NextApiRequest, res: NextApiResponse) {
  const { key } = req.query;
  try {
    getPostByKey(key as string, { prefix: "post/" })
      .then((e) => {
        res.status(200).json({ status: true, data: e });
      })
      .catch((e) => {
        res.status(500).json({ status: false });
      });
  } catch (error) {
    res.status(500).json({ status: false });
  }
}
