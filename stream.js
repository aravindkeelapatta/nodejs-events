var fs = require("fs");

var filepath = "./sample.txt"

var readable = fs.createReadStream(filepath, {encoding:"utf-8", highWaterMark : 32 * 1024})


var writable = fs.createWriteStream("./write-new-file.txt");

readable.on("data", function(chunk) {
	console.log(chunk.length)

	writable.write(chunk)
})


