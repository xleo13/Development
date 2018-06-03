let fs = require("fs");
fs.readFile("text.txt","ascii", function(error, data) {
	if (error) {
		console.log("Unable to read file.");
	} else {
		console.log("data");
	}
});
