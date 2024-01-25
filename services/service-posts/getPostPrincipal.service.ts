import { NextApiRequest, NextApiResponse } from "next";
import { getPost, getPostByKey } from "./postMetodos.service";
type Data = {
  title: string;
  text: string;
};
export async function GetPostPrincipal(
  req: NextApiRequest,
  res: NextApiResponse
) {
  getPostByKey("textoPrincipal", { prefix: "/" })
    .then((e) => {
      res.status(200).json({ status: true, data: e });
    })
    .catch((e) => {
      res.status(500).json({ status: false });
    });
}
