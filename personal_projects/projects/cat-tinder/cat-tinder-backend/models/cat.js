'use strict';
module.exports = (sequelize, DataTypes) => {
  var Cat = sequelize.define('Cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    enjoys: DataTypes.TEXT,
    city: DataTypes.STRING
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
};