let express = require("express");
let app = express();
require("dotenv").config();

//set the absolut path using the __dirname global variable
const absolutePathHTMl = __dirname + "/views/index.html";

const absolutePathCSS = __dirname + "/public";

app.use("/public", express.static(__dirname + "/public"));

// send file response example
app.get("/", (req, res) => {
  res.sendFile(absolutePathHTMl);
});

// json response to the get method on the /json route
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});
//send string response example
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

console.log("Hello World");

module.exports = app;
