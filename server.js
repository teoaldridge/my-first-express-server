//jshint esversion:6

const express = require ("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
})

app.get("/contact", function (req, res) {
  res.send("Contact me on teodora@gmail.com");
})

app.get("/about", function (req, res) {
  res.send("I am a full stack developer in the making.");
})

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Pilates</li><li>Code</li><li>Community Projects</li></ul>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
