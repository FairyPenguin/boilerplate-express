let express = require("express");
let app = express();

//set the absolut path using the __dirname global variable
const absolutePathHTMl = __dirname + "/views/index.html";

const absolutePathCSS = __dirname + "/public";

app.use("/public", express.static(__dirname + "/public"));

// send file response example
app.get("/", (req, res) => {
  res.sendFile(absolutePathHTMl);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});
//send string response example
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

console.log("Hello World");

module.exports = app;
