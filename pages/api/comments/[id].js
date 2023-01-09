import { data } from "../../../data/comments";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    const comment = data.find((comment) => comment.id === parseInt(id));
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = data.find((comment) => comment.id === parseInt(id));
    const i = data.findIndex((data) => data.id === parseInt(id));
    data.splice(i, 1);
    res.status(200).json(deletedComment);
  }
}
