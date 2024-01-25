import { NextApiRequest, NextApiResponse } from "next";
import { getPost } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};
export async function GetPost(req: NextApiRequest, res: NextApiResponse) {
  getPost()
    .then((e) => {
      res.status(200).json({ status: true, data: e });
    })
    .catch((e) => {
      res.status(500).json({ status: false });
    });
}
