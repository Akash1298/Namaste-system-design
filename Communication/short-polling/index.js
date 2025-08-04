const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let data = "initial data";
app.get("/getData", (req, res) => {
  res.send({ data });
});

app.get("/updateData", (req, res) => {
  data = `updated data at ${new Date().toLocaleTimeString()}`;
  res.send({ data });
});

app.listen(PORT, () => {
  console.log(`Server is running!! on ${PORT}`);
});
