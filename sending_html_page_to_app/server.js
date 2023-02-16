const path = require("path");
const express = require("express");
const app = express();

const pathFile = path.join(__dirname, "public");
console.log(pathFile);

// app.use(express.static(pathFile)); // used to send static files
app.get("", (req, res) => {
  res.sendFile(`${pathFile}/index.html`); // using sendFile we can hide the extension .html
});
app.get("/contact", (req, res) => {
  res.sendFile(`${pathFile}/contact.html`);
});
// 404 page
app.get("*", (req, res) => {
  res.sendFile(`${pathFile}/pageNotFound.html`);
});

app.listen(4500);
