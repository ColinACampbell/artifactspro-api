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
    package_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'organization_pricing_packages',
        },
        key: 'package_id'
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
    address_line_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_line_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_line_1 : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_line_2 : {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_valid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    org_code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: 'organizations',
    schema: 'public'
  });
};