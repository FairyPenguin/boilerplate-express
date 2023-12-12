let express = require("express");
let app = express();

const absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

console.log("Hello World");

module.exports = app;
