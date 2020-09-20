/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  return sequelize.define('work_space_members', {
    work_space_member_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: true,
      references: {
        model: {
          tableName: 'work_spaces',
        },
        key: 'work_space_id'
      }
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'work_space_members',
    schema: 'public'
  });
};
