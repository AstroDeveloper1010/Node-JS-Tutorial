const express = require("express");
const app = express();

app.get("", (req, res) => {
  // res.send("This is our Home Page");

  res.send(`
  <input type = "text" placeholder = "name">
  <input type = "submit">
  <a href="/about">Go to About Page</a>
  `);
});
app.get("/about", (req, res) => {
  res.send(`
  This is our About Page
  <a href="/">Go to Home Page</a>
  `);
});
app.get("/contact", (req, res) => {
  // res.send("This is our Contact Page");

  res.send({
    name: "Priyanshu",
    email: "priyanshujha131@gmail.com",
  });
});
app.get("/service", (req, res) => {
  res.send("This is our Service Page");
});

app.listen(4000);
