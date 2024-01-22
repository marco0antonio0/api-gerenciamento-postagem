import { NextApiRequest, NextApiResponse } from "next";
import { delPostByKey, setPostByKey } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};
export async function DeletePost(req: NextApiRequest, res: NextApiResponse) {
  const { key } = req.body;
  if (key) {
    try {
      var temp = await delPostByKey(key);
      if (temp) {
        res.status(200).json({ status: temp });
      } else {
        res.status(500).json({ status: temp });
      }
    } catch (error) {
      res.status(500).json({ status: false });
    }
  } else {
    res.status(500).json({ status: false });
  }
}
