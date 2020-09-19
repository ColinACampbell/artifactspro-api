/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_messages', {
    chat_message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chat_message_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chat_room_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    reciever_id: {
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
    tableName: 'chat_messages',
    schema: 'public'
  });
};
