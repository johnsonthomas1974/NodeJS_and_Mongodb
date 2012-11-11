var express = require("express");
var app = express();
//app.set("view engine", "ejs");
//app.set("views", __dirname + "\\views");
//app.set("view options", {layout:false});
//app.use(express.staticProvider(__dirname + '/views')); 
//app.register('.html', require('jade'));
//console.log (app.set("views"));

//app.get("/", function (req, res){ res.render("home.html");});
//app.get("/chapter_1", function (req, res){ res.render("chapter_1.json");});
app.get("/", function (req, res){ res.sendfile('public/home.html');;});
app.get("/chapter_1", function (req, res){ res.sendfile('public/chapter_1.json');;});
app.listen(1337);

