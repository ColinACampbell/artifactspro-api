/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_space_members', {
    work_space_member_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    work_space_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'work_spaces',
        },
        key: 'work_space_id'
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'work_space_members',
    schema: 'public'
  });
};
