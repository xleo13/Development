let connection = require('./models/sequelize-connection')

connection.authenticate()
  .then(function(){
    console.log('success!')
  })
  .catch(function(error){
    console.log(error)
  })
