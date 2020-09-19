/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('work_space_message_replies', {
    work_space_msg_reply_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    action_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    work_space_msg_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'work_space_messages',
        },
        key: 'work_space_msg_id'
      }
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
    }
  }, {
    sequelize,
    tableName: 'work_space_message_replies',
    schema: 'public'
  });
};
