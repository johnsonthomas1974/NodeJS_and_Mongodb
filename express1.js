var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "\\views");
app.set("view options", {layout:false});
console.log (app.set("views"));
app.get("/", function (req, res){ res.render("index");});
app.listen(1337);

