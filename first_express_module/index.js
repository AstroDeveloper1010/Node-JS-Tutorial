const express = require('express');
const app = express();

app.get("", (req, res) => {
  res.send("This is our Home Page");
});
app.get("/about", (req, res) => {
  res.send("This is our About Page");
});
app.get("/contact", (req, res) => {
  res.send("This is our Contact Page");
});
app.get("/service", (req, res) => {
  res.send("This is our Service Page");
});

app.listen(4000);
