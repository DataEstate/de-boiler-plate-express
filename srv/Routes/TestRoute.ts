import { Router } from "express";
import { getMain, getDbRequest } from "../Handlers/Test";

export const TestRoute = Router()
  .get("/test", getMain)
  .get("/test/database", getDbRequest);

export default TestRoute;
