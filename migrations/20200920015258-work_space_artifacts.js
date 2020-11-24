'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("work_space_artifacts",{
      work_space_artifacts_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      work_space_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //defaultValue: nextvalworkspace_artifacts_work_space_id_seq::regclass,
        references: {
          model: {
            tableName: 'work_spaces',
          },
          key: 'work_space_id'
        }
      },
      art_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        //defaultValue: nextvalworkspace_artifacts_art_id_seq::regclass,
        references: {
          model: {
            tableName: 'artifacts',
          },
          key: 'art_id'
        }
      },
      is_secured : {
        type : Sequelize.INTEGER,
        allowNull : false,
      },
      password : {
        type : Sequelize.TEXT,
        allowNull : true,
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
