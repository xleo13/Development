let Sequelize = require('sequelize')

module.exports = new Sequelize( 'country', '','', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idel: 10000
  }
})
