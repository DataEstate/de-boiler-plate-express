import { RequestHandler } from "express";

export const getMain: RequestHandler = (req, res) => {
  res.send({
    message: "This is the main test route",
  });
};

export default getMain;
