import express from "express";
import cors from "cors";

import { dbConnection } from "./database/config.js";

const app = express();

app.use(cors());

dbConnection();

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
