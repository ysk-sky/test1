const express = require("express")

const app = express();
const server = app.listen(process.env.PORT, function(){
	console.log("Node.js is listening to PORT:"+server.address().port)
});

app.get("/", (req,res,next)=>{
	res.status(200).sendFile(__dirname + '/index.html')
})
app.get("/meta", (req,res,next)=>{
	res.status(200).sendFile(__dirname + '/meta.html')
})
