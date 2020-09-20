'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("work_space_messages",{
      work_space_msg_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      message_title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'user_id'
        }
      },
      work_space_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'work_spaces',
          },
          key: 'work_space_id'
        }
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false
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
