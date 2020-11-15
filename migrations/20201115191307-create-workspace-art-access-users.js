'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('workspace_art_access_users', {
      ws_art_access_users_id : {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      user_id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'user_id'
        }
      },
      permissions: Sequelize.STRING,
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('workspace_art_access_users');
  }
};