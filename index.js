const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = 4200;
const realtyRouter = require("./routes/realtyRouter");

app.listen(port, () => {
  console.log(`${port}번 포트로 서버가 가동 중 입니다.`);
});

app.use("/api/realty", realtyRouter);

app.use("/", (req, res) => {
  res.json("hello world!!");
});