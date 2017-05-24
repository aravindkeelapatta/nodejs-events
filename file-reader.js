var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();

var fs = require("fs");

var path = require("path");

var filepath = path.join(__dirname, "sample.txt")

// var filepath = __dirname + "/sample.txt"

emitter.on("start_reading", function(filepath) {

	console.log("Start Reading the file !!!")

	fs.readFile(filepath, "utf-8", function(err, data) {
		if(err) {
			emitter.emit("error", err)
			return;
		}
		emitter.emit("print_content", data)
	})
})


emitter.on("print_content", function(data) {
	console.log(data);
	emitter.emit("done", "Succssfully Reading the file");
})

emitter.on("error", function(message) {

	console.log("There is an error")
	console.log("Error Details :" +message);
	console.log("Couldn't read file")
})

emitter.on("done", function(message) {
	console.log(message)
})

emitter.emit("start_reading", filepath);