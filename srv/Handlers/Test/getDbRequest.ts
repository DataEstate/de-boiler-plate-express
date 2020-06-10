import { Db } from "mongodb";
import { RequestHandler } from "express";
import { MongoDBService } from "../../Database/MongoDBService";

export const getDbRequest: RequestHandler = async (req, res) => {
  const db = await MongoDBService().getDb();
  const testData = await db.collection("testCollection").find().toArray();
  res.send(testData);
};

export default getDbRequest;
