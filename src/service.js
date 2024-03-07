import express from "express";

const app = express();

// chuyển tất cả sang định dạng json
app.use(express.json());

// mở khóa
import cors from "cors";
app.use(cors());

app.listen(8080);

// test
app.get("/demo", (request, response) => {
  response.send("Hí anh em");
});

// kết nối csdl
import mysql from "mysql2";

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  port: "3307",
  database: "AppFood",
});

import rootRoute from "./routes/rootRoutes.js";
app.use(rootRoute);
