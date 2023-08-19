const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);

  res.send(JSON.stringify({ hey: "hello" }));
});

app.listen(PORT, () => {
  console.log("Server is running!!!");
});
