const express =  require("express");
const app = express();
const path = require("path")

app.use("/public", express.static('public'));
app.use("/style", express.static("2048-master/style"));
app.use("/js", express.static("2048-master/js"));
app.use(express.static("clumsy-bird-master"))
app.use("/assets", express.static("assets"))
app.use(express.static("mimstris-master/dist"));
app.use(express.static("mimstris-master/src"));
app.use(express.static("canvas-tetris-master"))
app.use(express.static("emoji"));





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
app.get("/tet", function(req,res) {
	res.sendFile(__dirname + "/canvas-tetris-master/index.html")
})
app.get("/mine", function(req,res){
	res.sendFile(__dirname + "/emoji/index.html")
})
app.get("/work",function(req,res){
	res.sendFile(__dirname + "/work.html")
})


app.listen(process.env.PORT || 3000)
console.log("everthing is fine");
