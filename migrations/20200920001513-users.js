'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users",{
      user_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      recovery_code : {
        type: Sequelize.TEXT,
        allowNull: true
      },
      last_name: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      first_name: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      is_verified: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      access_code: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type : Sequelize.DATE,
        field: 'created_at'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return 
    */
   return queryInterface.dropTable('users');
  }
};

