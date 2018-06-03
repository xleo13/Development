let express = require('express')
let cookieParser = require('cookie-parser')

let middlewareA  = function(request, response, next){
  console.log("Entering Middleware A")
  console.log("page visits: " + request.cookies.pageVisits)
  next()
  console.log("Finishing Middleware A")
  console.log("page visits: " + request.cookies.pageVisits)
}

let middlewareB  = function(request, response, next){
  console.log("Entering Middleware B")
  next()
  console.log("Finishing Middleware B")
}

app = express()
app.use(cookieParser())
app.use(middlewareA)
app.use(middlewareB)

app.get('/',
  function(request, response){

    //we read cookies from the request
    let pageVisits = parseInt(request.cookies.pageVisits) || 0

    //we set cookies on the response
    response.cookie('pageVisits', pageVisits + 1)

    response.send("Hello World. Page Visits:" + pageVisits )
  })

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
