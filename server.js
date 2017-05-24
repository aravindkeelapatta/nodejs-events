/*var EventEmitter  = require("events").EventEmitter;


var emitter  = new EventEmitter();

emitter.on("radiation", function(ray) {
	console.log(ray)
})


setInterval(function(){
emitter.emit("radiation", "GAMMA")

},1000)*/



var express = require("express");

var app = express();

var router = express.Router();

app.use("/api", router)

router.get("/", function(request, response) {
	response.json({message: "Hello Bangalore !!"})
})


router.get("/user", function(request, response) {
	response.json({message: "User end point !!"})
})

router.get("/customer", function(request, response) {
	var customer = {
		name : "Aravind",
		age : 23,
		Dep : "Software"
	}
	response.json({customer})
})

var PORT = process.env.PORT || 1337;

app.listen(1337, function() {
	console.log("Server Listening at PORT !!" + PORT)
})