import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;
import router from "./routes/index";

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to image processing API");
});
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
