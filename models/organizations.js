/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizations', {
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    org_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    org_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    org_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    access_key: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'organizations',
    schema: 'public'
  });
};