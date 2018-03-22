var express = require('express');
var app = express();
var Country = require('./models/country');
var port = process.argv[2];

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function (request, response) {
  let countries = Country.findAll().then(function(countries){
    response.render('index', {countries: countries})
  })
})

app.listen(process.argv[2], function () {
 console.log('Example app listening on port 3000!')
})
