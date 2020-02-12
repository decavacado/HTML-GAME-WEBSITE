const express =  require("express");
const app = express();


//Routes
app.get("/home",(req,res) => {
	res.send("SUP");
})

app.listen(process.env.PORT || 3000)