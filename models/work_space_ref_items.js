'use strict';
module.exports = (sequelize, DataTypes) => {
  const work_space_ref_items = sequelize.define('work_space_ref_items', {
    ws_ref_item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    art_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'artifacts',
        },
        key: 'art_id'
      }
    },
    work_space_ref_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'work_space_references',
        },
        key: 'work_space_ref_id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    tableName: 'work_space_ref_items',
    schema: 'public'
  });
  work_space_ref_items.associate = function (models) {
    // associations can be defined here
  };
  return work_space_ref_items;
};