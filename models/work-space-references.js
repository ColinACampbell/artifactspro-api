'use strict';
module.exports = (sequelize, DataTypes) => {
  const work_space_references = sequelize.define('work_space_references', {
    work_space_ref_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    work_space_msg_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete : 'CASCADE',
      onUpdate : 'CASCADE',
      references: {
        model: {
          tableName: 'work_space_messages',
        },
        key: 'work_space_msg_id'
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },  
  }, {
    sequelize,
    tableName: 'work_space_references',
    schema: 'public'
  });
  work_space_references.associate = function (models) {
    // associations can be defined here
  };
  return work_space_references;
};