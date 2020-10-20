import { NowRequest, NowResponse } from "@vercel/node";

export default (req: NowRequest, res: NowResponse) => {
  if (req.cookies.test !== "test") {
    res.status(403).send("Forbidden");
    return;
  }

  res.setHeader("content-type", "application/x-bittorrent");
  res
    .status(200)
    .send(
      Buffer.from(
        "ZDg6YW5ub3VuY2UwOjEzOmFubm91bmNlLWxpc3RsbDA6ZWU3OmNvbW1lbnQwOjEwOmNyZWF0ZWQgYnkyMDpGbG9vZCAtIGZsb29kLmpzLm9yZzEzOmNyZWF0aW9uIGRhdGVpMTYwMzIwNjU3M2U4OmVuY29kaW5nNTpVVEYtODQ6aW5mb2Q2Omxlbmd0aGk1ZTQ6bmFtZTU6ZHVtbXkxMjpwaWVjZSBsZW5ndGhpMTYzODRlNjpwaWVjZXMyMDpOEkO9IsZudsK6nt3B+ROU5X+fgzc6cHJpdmF0ZWkwZWVl",
        "base64"
      )
    );
};
