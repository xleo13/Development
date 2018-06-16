'use strict';
module.exports = (sequelize, DataTypes) => {
  var Available = sequelize.define('Available', {
    loa: DataTypes.INTEGER,
    kind: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Available.associate = function(models) {
    // associations can be defined here
  };
  return Available;
};