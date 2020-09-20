/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_verified: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    access_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    createdAt: {
      type : DataTypes.DATE,
      field: 'created_at'
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public'
  });
};
