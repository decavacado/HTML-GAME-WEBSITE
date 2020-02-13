const express =  require("express");
const app = express();
const path = require("path")

app.use("/public", express.static('public'));
app.use("/style", express.static("2048-master/style"));
app.use("/js", express.static("2048-master/js"));
app.use(express.static("clumsy-bird-master"))





//Routes
app.get("/home",(req,res) => {
	res.sendFile(__dirname + "/home.html")
})
app.get("/carrush",(req,res) => {
	res.sendFile(__dirname + "/carrush.html")
})
app.get("/2048", function(req,res){
	res.sendFile(__dirname + "/2048-master/index.html")
})
app.get("/fp", function(req,res){
	res.sendFile(__dirname + "/clumsy-bird-master/index.html")
})

app.listen(process.env.PORT || 3000)
console.log("everthing is fine");
