"use strict";

const PORT = 3000;

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./routes/home");  // index.js를 읽음.

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use: 미들웨어 등록 메소드

module.exports = app;