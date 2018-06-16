let path= require('path')
var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var app = express();
var cors = require('cors');
const Available  = require('./models').Available;
const User  = require('./models').User;

app.use(express.static('public'))
app.use(validator())
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')));




app.get('/', (req, res) => {
	res.json({message: 'API postman example'})
});

app.post('/test', (req, res) => {
	res.json({params: req.body})
});

app.post('/users', (req, res) => {
	User.create(
		{
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password,
			phone: req.body.phone
		}
	).then(user) => {
		res.json({
			message: 'success'
			user:user
		})
	}
})

// app.get('/availables', (req, res) => {
// 	Available.findAll().then( (availables) =>{
// 		res.json({availables:availables})
// 	})
// })


// app.post('/availables', (req, res) => {
// 		req.checkBody('loa', 'Is required').notEmpty()
// 		req.checkBody('kind', 'Is required').notEmpty()
// 		req.checkBody('location', 'Is required').notEmpty()
// 		req.checkBody('description', 'Is required').notEmpty()
//
// 	req.getValidationResult()
// 	  .then((validationErrors) =>{
// 		if(validationErrors.isEmpty()){
// 	  Available.create({
// 	    loa: req.body.loa,
// 	    kind: req.body.kind,
// 	    location: req.body.location,
// 		description: req.body.description
// 	}).then((available)=>{
// 	    res.status(201)
// 	    res.json({available: available})
// 	 })
// 	  	}else{
// 		res.status(400)
// 		res.json({errors: {validations: validationErrors.array()}})
// 	  }
// 	})
// })

//Begins 'get' and 'post' process for /users route path.




app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



module.exports = app
