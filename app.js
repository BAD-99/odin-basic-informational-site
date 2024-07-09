var express = require("express");
const path = require("path");

var app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "/style.css"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
});

module.exports = app;
