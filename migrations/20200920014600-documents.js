'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("documents",{
      doc_id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      version: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      comment: {
        type: Sequelize.TEXT,
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
      data: {
        type: 'BYTEA',
        allowNull: false
      },
      date_uploaded: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      date_modified: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      art_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: 'artifacts',
          },
          key: 'art_id'
        }
      },
      type: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment: 'this is the document type to be uploaded, for instance pdf, docx or psd'
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
