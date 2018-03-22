var express = require('express');
var app = express();
var reversetetx = function reverseString(r){
  return r.reverse();
}

app.get('/home', function(request, response){
  response.send('Hello World!');
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
