import { NextApiRequest, NextApiResponse } from "next";
import { getPost, setPostByKey } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};
export async function UpdatePost(req: NextApiRequest, res: NextApiResponse) {
  const { key, title, text } = req.body;
  try {
    var temp = await setPostByKey(key, { title: title, text: text });
    if (temp) {
      res.status(200).json({ status: temp });
    } else {
      res.status(500).json({ status: temp });
    }
  } catch (error) {
    res.status(500).json({ status: false });
  }
}
