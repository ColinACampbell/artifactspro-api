/* jshint indent: 2 */

module.exports = function(sequelize, Sequelize) {
  return sequelize.define('chat_messages', {
    chat_message_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    chat_message_text: {
      type: Sequelize.STRING,
      allowNull: false
    },
    timestamp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    chat_room_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    sender_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    reciever_id: {
      type: Sequelize.INTEGER,
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
