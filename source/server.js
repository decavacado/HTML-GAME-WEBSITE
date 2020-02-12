const express =  require("express");
const app = express();
const path = require("path")

app.use("/public", express.static("public"));
//Routes
app.get("/home",(req,res) => {
	res.sendFile(__dirname + "/home.html")
})

app.use(express.static(__dirname + '/2048-master/style'));
app.use(express.static(__dirname + '/2048-master/js'));

app.get("/2048", function(req,res) {
	res.sendFile(__dirname + "/2048-master/index.html")
})

app.listen(process.env.PORT || 3000)
console.log("everthing is fine");