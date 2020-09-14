const path = require("path");
var http = require("http");
const express = require("express");
const app = express();

// app.use("/static", express.static("static"));
// app.use("/static", express.static(__dirname + "/static"));
// app.use("/css", express.static(path.join(__dirname, "static/css")));
// app.use("/js", express.static(path.join(__dirname, "static/js")));
// app.use("/media", express.static(path.join(__dirname, "static/media")));
// app.use(express.static("static"));
// app.use(express.static(path.join(__dirname, "static")));
app.use("/", express.static("static"));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = 21168;
app.listen(port);
