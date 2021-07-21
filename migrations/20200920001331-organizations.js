'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("organizations",{
      user_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'user_id'
        }
      },
      org_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },address_line_1: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      address_line_2: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      phone_line_1 : {
        type: DataTypes.TEXT,
        allowNull: true
      },
      phone_line_2 : {
        type: DataTypes.TEXT,
        allowNull: true
      },
      type: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      is_valid: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      org_code: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      access_key: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
