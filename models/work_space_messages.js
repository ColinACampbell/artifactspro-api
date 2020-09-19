/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_space_messages', {
    work_space_msg_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message_content: {
      type: DataTypes.STRING,
      allowNull: false
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
      allowNull: false,
      references: {
        model: {
          tableName: 'work_spaces',
        },
        key: 'work_space_id'
      }
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'work_space_messages',
    schema: 'public'
  });
};
