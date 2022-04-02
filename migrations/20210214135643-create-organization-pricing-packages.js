'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('organization_pricing_packages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      package_name: {
        type: Sequelize.STRING
      },
      user_limit : {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      workspace_limit: {
        type: Sequelize.INTEGER,
        allowNull : false,
      },
      price_per_gigabyte: {
        type: Sequelize.DECIMAL,
        allowNull : false
      },
      package_price : {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('organization_pricing_packages');
  }
};