'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organization_pricing_packages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  organization_pricing_packages.init({
    package_id : {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    package_name: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    user_limit : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    workspace_limit: {
      type: DataTypes.INTEGER,
      allowNull : false,
    },
    price_per_gigabyte: {
      type: DataTypes.DECIMAL,
      allowNull : false
    },
    package_price : {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'organization_pricing_packages',
  });
  return organization_pricing_packages;
};