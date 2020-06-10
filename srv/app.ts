import express from "express";
import { Request, Response, Router } from "express";
import { TestRoute } from "./Routes";

const app = express();

const { PORT = 3000 } = process.env;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world 3",
  });
});
app.use("/api", TestRoute);

if (require.main === module) {
  // true if file is executed
  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
}

export default app;
