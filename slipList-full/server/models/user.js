'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
	encryptedPassword: DataTypes.STRING,
    phone: DataTypes.STRING,
	authToken: DataTypes.STRING,
	authTokenExpiration: DataTypes.DATE,
	salt: DataTypes.STRING
}, {
	setterMethods: {
		password(value){
			const encryptedValue = 'super secret value'
			this.setDataValue('encryptedPassword', encryptedValue)
		}
	}
});
  return User;
};
