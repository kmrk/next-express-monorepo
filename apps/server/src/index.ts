import express from "express";

import { testLucia } from "@repo/shared";
import { testServer } from "@repo/next";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello World!");

  testLucia();

  testServer();//

});
const PORT = process.env.SERVER_PORT || 9999;

app.listen(PORT, () => { console.log("started"); });