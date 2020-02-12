const express =  require("express");
const app = express();
const path = require("path")

app.use("/public", express.static("public"));
//Routes
app.get("/home",(req,res) => {
	res.sendFile(__dirname + "/home.html")
})

app.listen(process.env.PORT || 3000)
console.log("everthing is fine");