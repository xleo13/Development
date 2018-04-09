let connection = require('./models/sequelize-connection')
//need to grab country.js from the models directory
let Country = require('./models/country')

connection.authenticate()
  .then(function(){
    console.log('success!')
  })
  .catch(function(error){
    console.log(error)
  })

//quering thru records in sequelize
  Country.all({limit: 2}).then(function(countries) {
  	let mapped = countries.map(function (country) {
  		return country.get()
  	})
  	console.log(mapped);
})

//Build a record(different than creating record), does not save right away
let genovia = Country.build({
	code: 'GEN',
	name: 'Genovia',
	continent: 'Europe',
	region: 'Make Believe'
})

genovia.save()
.then(function() {
	//whatever you want afterwards inside block
})
.catch(function(error) {

})
//===============================================

//Create a record
let florin = Country.create({
	code: 'FLR',
	name: 'Florin',
	continent: "Europe",
	region: 'Make Belive'
})
	.then(function() {

	})
	.catch(funciton() {

	})
//=================================================

//Delete a record
Country.all({
	where: {
		region: 'Make Believe'
	}
})
	.then(funciton(records) {
		let promises = records.map(function(Country) {
			return country.destroy();
		})
		return Promise.all(promises)
	})
//==================================================

//Update a record
let florin = Country.create({
	code: 'FLR',
	name: 'Florin',
	continent: 'Europe',
	region: 'Make Believe'
})
	.then(function(country) {
		country.region = "Storyland"; //this is where we update its values
		return country.save(); //a promise
	})
	.catch(function(error) {

	})
