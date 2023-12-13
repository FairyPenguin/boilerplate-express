let express = require("express");
let app = express();
require("dotenv").config();

//set the absolut path using the __dirname global variable
const absolutePathHTMl = __dirname + "/views/index.html";

const absolutePathCSS = __dirname + "/public";

// root-level middleware logger
app.use(function middleware(req, res, next) {
  const responseMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(responseMessage);
  next();
});

app.get(
  "/now",
  function chainedMiddleware(req, res, next) {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

app.use("/public", express.static(__dirname + "/public"));

// send file response example
// app.get("/", (req, res) => {
//   res.sendFile(absolutePathHTMl);
// });

// json response to the get method on the /json route
// app.get("/json", (req, res) => {
//   let message = "Hello json";

//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     message = message.toUpperCase();
//   }

//   res.json({ message });
// });
//send string response example
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

console.log("Hello World");
// console.log(process.env.MESSAGE_STYLE);

module.exports = app;
