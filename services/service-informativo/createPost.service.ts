import { NextApiRequest, NextApiResponse } from "next";
import { createPost, getPost } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};

export async function CreatePost(req: NextApiRequest, res: NextApiResponse) {
  try {
    var temp = createPost({
      data: JSON.parse(req.body),
    });
    if (temp) {
      res.status(200).json({ status: temp });
    } else {
      res.status(500).json({ status: temp });
    }
  } catch (error) {
    res.status(500).json({ status: false });
  }
}
