let path= require('path')
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var validator = require('express-validator')
var app = express();
const Cat = require('./models').Cat;


app.use(express.static('public'))
app.use(validator())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('/test', (req, res) => {
  res.json({message: 'API Example App'})
});

app.get('/cats', (req, res) => {
  Cat.findAll().then( (cats) =>{
    res.json({cats:cats})
  })
})

app.post('/cats', (req, res) => {

  // We setup a validation check for 'name'
  req.checkBody('name', 'Required').notEmpty()
  req.checkBody('age', 'Required').notEmpty()
  req.checkBody('enjoys', 'Required').notEmpty()
  req.checkBody('city', 'Required').notEmpty()

  // Now we can run our validations
  req.getValidationResult()
    .then((validationErrors) =>{

      // If there are no errors, go ahead and create cat
      if(validationErrors.isEmpty()){
        Cat.create({
          name: req.body.name,
          age: req.body.age,
          enjoys: req.body.enjoys,
		  city: req.body.city
        }).then((cat)=>{
          res.status(201)
          res.json({cat: cat})
        })
      } else{

        // Uh ohh,  there were validation issues.  Report them back to the user.
        res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
      }
    })
})

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app
