'use strict';
module.exports = (sequelize, DataTypes) => {
  const workspace_art_access_users = sequelize.define('workspace_art_access_users', {
    ws_art_access_users_id : {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    work_space_artifacts_id : {
      type : DataTypes.INTEGER,
      allowNull : false,
      references: {
        model: {
          tableName: 'work_space_artifacts',
        },
        key: 'work_space_artifacts_id'
      }
    }
    ,
    user_id : {
      type : DataTypes.INTEGER,
      allowNull : false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'user_id'
      }
    },
    permissions: DataTypes.STRING,
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    permissions: DataTypes.STRING,
  }, {});
  workspace_art_access_users.associate = function(models) {
    // associations can be defined here
  };
  return workspace_art_access_users;
};