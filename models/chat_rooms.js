/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_rooms', {
    chat_room_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'chat_rooms',
    schema: 'public'
  });
};
