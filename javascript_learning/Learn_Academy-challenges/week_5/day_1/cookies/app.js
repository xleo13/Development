let express = require('express');
let cookieParser = require('cookie-parser');

app = express();
app.use(cookieParser({
	secret: 'im a string to make the session secure'
}))

app.get('/',
	function(request, response) {

		//we read cookies from the request
		let pageVisits = parseInt(request.cookies.pageVisits) || 0;

		//we set cookies on the response
		request.session.destroy(function(err) {
			if(err) {
				response.send("Error clearing session " + err);
			} else {
				response.send("Session Cleared");
			}
		})
	})

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
})
