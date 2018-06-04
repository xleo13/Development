var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var Cat = require('./models').Cat;
var path = require('path');

app.use(express.static('public')); // NOTE: might need to get rid of this code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(validator());
app.use(cors()) //adding cors in a middleware

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.get('/', (req, res) => {
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
      }else{

        // Uh ohh,  there were validation issues.  Report them back to the user.
        res.status(400)
        res.json({errors: {validations: validationErrors.array()}})
      }
    })
})

app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
