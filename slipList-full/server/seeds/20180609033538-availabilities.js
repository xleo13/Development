'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Available',
			[
				{

				}
			]
		)
	},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Available', null, {});
  }
};
