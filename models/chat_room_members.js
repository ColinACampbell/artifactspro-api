/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_room_members', {
    chat_room_member_id: {
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
    chat_room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'chat_rooms',
        },
        key: 'chat_room_id'
      }
    }
  }, {
    sequelize,
    tableName: 'chat_room_members',
    schema: 'public'
  });
};
